import { validateLeadSubmission } from "@/lib/leads";

const noStoreHeaders = { "Cache-Control": "no-store" };
const maxBodySize = 16_384;

function tooLargeResponse() {
  return Response.json(
    { error: "The request is too large." },
    { status: 413, headers: noStoreHeaders },
  );
}

export async function POST(request: Request) {
  const contentType = request.headers
    .get("content-type")
    ?.split(";")[0]
    .trim()
    .toLowerCase();

  if (contentType !== "application/json") {
    return Response.json(
      { error: "Content-Type must be application/json." },
      { status: 415, headers: noStoreHeaders },
    );
  }

  const contentLengthHeader = request.headers.get("content-length");
  const contentLength =
    contentLengthHeader === null ? Number.NaN : Number(contentLengthHeader);
  if (Number.isFinite(contentLength) && contentLength > maxBodySize) {
    return tooLargeResponse();
  }

  let body: unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader) {
      return Response.json(
        { error: "Request body must be valid JSON." },
        { status: 400, headers: noStoreHeaders },
      );
    }

    const chunks: Uint8Array[] = [];
    let byteLength = 0;

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        byteLength += value.byteLength;
        if (byteLength > maxBodySize) {
          await reader.cancel().catch(() => undefined);
          return tooLargeResponse();
        }
        chunks.push(value);
      }
    } finally {
      reader.releaseLock();
    }

    const bytes = new Uint8Array(byteLength);
    let offset = 0;
    for (const chunk of chunks) {
      bytes.set(chunk, offset);
      offset += chunk.byteLength;
    }
    body = JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes));
  } catch {
    return Response.json(
      { error: "Request body must be valid JSON." },
      { status: 400, headers: noStoreHeaders },
    );
  }

  const result = validateLeadSubmission(body);
  if (!result.success) {
    return Response.json(
      { error: "Check the required fields and try again.", fields: result.errors },
      { status: 422, headers: noStoreHeaders },
    );
  }

  // Prototype boundary: validated form data is intentionally discarded here.
  return Response.json(
    { status: "accepted" },
    { status: 202, headers: noStoreHeaders },
  );
}
