import {
  formatReviewedDate,
  type EditorialSource,
} from "@/lib/editorial";

export function InformationReviewed({ date }: { date: string }) {
  return (
    <span>
      Information last reviewed{" "}
      <time dateTime={date}>{formatReviewedDate(date)}</time>
    </span>
  );
}

export function InformationSources({ sources }: { sources: readonly EditorialSource[] }) {
  if (sources.length === 0) {
    return null;
  }

  return (
    <aside
      className="information-sources"
      aria-labelledby="information-sources-title"
    >
      <h2 id="information-sources-title">Official and primary sources</h2>
      <p>
        Consult the responsible organization for current rules and how they
        apply to your circumstances. These links are reference points, not
        legal advice or a guarantee that every situation is covered.
      </p>
      <ul>
        {sources.map((source) => (
          <li key={source.url}>
            <a href={source.url}>{source.title}</a>
            <span className="information-source-publisher">
              {" "}
              — {source.publisher}
            </span>
            <p>{source.context}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
