import React from "react";
import styles from "./bundling-list.module.scss";

export interface BundlingListProps {
  listItems: string[];
}

export const BundlingList = ({ listItems = [] }: BundlingListProps) => {
  return (
    <ul className={styles.container}>
      {listItems.map((item) => {
        return <li>{item}</li>;
      })}
    </ul>
  );
};
