import Link from "next/link";
import React from "react";
import styles from "./menu-item-link.module.scss";

type MenuItemProps = {
  text: string;
  href: string;
};

export function MenuItemLink({ text, href }: MenuItemProps) {
  return (
    <li className={styles.listItem}>
      <Link href={href} className={styles.anchor}>
        {text}
      </Link>
    </li>
  );
}
