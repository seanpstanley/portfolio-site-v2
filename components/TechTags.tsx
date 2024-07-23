import React from "react";

interface TagsProps {
  tags: string[];
}

export default function TechTags({ tags }: TagsProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag: string, index: number) => (
        <li
          className="nm-flat-pattens-blue-sm dark:nm-flat-cinder px-3 py-1 text-[0.7rem] flex-grow-0 tracking-wider text-gray-600 dark:text-white/80 transition rounded-full"
          key={index}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
