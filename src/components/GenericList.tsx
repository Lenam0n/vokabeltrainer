import React from "react";
import styles from "../styles/GenericList.module.css";
import { GenericListProps } from "../interfaces/Utils";

export function GenericList<T>({
  items,
  renderItem,
}: GenericListProps<T>): React.ReactElement {
  return (
    <ul className={styles.genericList_ul__ghi789}>
      {items.map((item, index) => (
        <li key={index} className={styles.genericList_li__ghi789}>
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  );
}
