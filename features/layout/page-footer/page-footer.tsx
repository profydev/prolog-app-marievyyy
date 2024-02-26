import { useContext } from "react";
import classNames from "classnames";
import { NavigationContext } from "../sidebar-navigation";
import { MenuItemLink } from "./menu-item-link";
import styles from "./page-footer.module.scss";

const menuItems = [
  { text: "Docs", href: "#" },
  { text: "API", href: "#" },
  { text: "Help", href: "#" },
  { text: "Commnunity", href: "#" },
];

export function PageFooter() {
  const { isSidebarCollapsed } = useContext(NavigationContext);

  return (
    <footer
      className={classNames(
        styles.footer,
        isSidebarCollapsed && styles.isCollapsed,
      )}
    >
      <nav className={styles.nav}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={"/icons/logo-small.svg"} alt="logo" className={styles.logo} />
        <ul className={styles.linkList}>
          {menuItems.map((menuItem, index) => (
            <MenuItemLink key={index} {...menuItem} />
          ))}
        </ul>
        <p className={styles.appVersion}>Version: {process.env.version}</p>
      </nav>
    </footer>
  );
}
