import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

export default function ExpandableText({ children, maxChars = 100 }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const text = isExpanded
    ? children
    : `${children.substring(0, maxChars).trim()}...`;

  return (
    <>
      <p>{text}</p>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </>
  );
}
