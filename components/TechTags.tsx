interface TechTagsProps {
  tags: string[];
  // show at most this many, then a "+N" chip
  max?: number;
}

export default function TechTags({ tags, max }: TechTagsProps) {
  const shown = max ? tags.slice(0, max) : tags;
  const hidden = tags.length - shown.length;

  return (
    <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
      {shown.map((tag) => (
        <li key={tag} className="chip">
          {tag}
        </li>
      ))}
      {hidden > 0 && (
        <li className="chip" title={tags.slice(shown.length).join(", ")}>
          <span aria-hidden="true">+{hidden}</span>
          <span className="sr-only">and {hidden} more</span>
        </li>
      )}
    </ul>
  );
}
