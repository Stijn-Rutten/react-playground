import { useState } from "react";
import styles from "./ListGroup.module.css";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
interface Props {
  items: string[];
  heading: string;
  onItemClick: (item: string) => void;
}

export default function ListGroup({ items, heading, onItemClick }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
    onItemClick(items[index]);
  };

  return (
    <>
      <BsFillCalendar2CheckFill />
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className={[styles.listGroup, styles.container].join(" ")}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => handleItemClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
