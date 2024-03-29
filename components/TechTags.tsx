import React from "react";

interface TagsProps {
  tags: string[];
}

export default function TechTags({ tags }: TagsProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag: string, index: number) => (
        <li
          className="bg-black/70 px-3 py-1 text-[0.7rem] flex-grow-0 tracking-wider text-white dark:text-white/80 rounded-full"
          key={index}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
