import React from "react";

interface TagsProps {
  tags: string[];
}

export default function TechTags({ tags }: TagsProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag: string, index: number) => (
        <li
          className="nm-flat-pattens-blue-sm dark:nm-flat-cinder-sm px-3 py-1 text-[0.7rem] flex-grow-0 tracking-wider text-gray-800 dark:text-white/80 transition-colors motion-reduce:transition-none rounded-full"
          key={index}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
