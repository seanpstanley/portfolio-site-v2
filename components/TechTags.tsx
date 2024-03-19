import React from "react";

interface TagsProps {
  tags: string[];
}

export default function TechTags({ tags }: TagsProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag: string, index: number) => (
        <li
          className="bg-black/[0.7] px-3 py-1 text-[0.7rem] flex-grow-0 tracking-wider text-white rounded-full"
          key={index}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
