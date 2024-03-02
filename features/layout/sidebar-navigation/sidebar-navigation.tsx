import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { Routes } from "@config/routes";
import classNames from "classnames";
import { NavigationContext } from "./navigation-context";
import { MenuItemButton } from "./menu-item-button";
import { MenuItemLink } from "./menu-item-link";
import { Button, ButtonColor } from "@features/ui";
import styles from "./sidebar-navigation.module.scss";

const menuItems = [
  { text: "Projects", iconSrc: "/icons/projects.svg", href: Routes.projects },
  { text: "Issues", iconSrc: "/icons/issues.svg", href: Routes.issues },
  { text: "Alerts", iconSrc: "/icons/alert.svg", href: Routes.alerts },
  { text: "Users", iconSrc: "/icons/users.svg", href: Routes.users },
  { text: "Settings", iconSrc: "/icons/settings.svg", href: Routes.settings },
];

export function SidebarNavigation() {
  const router = useRouter();
  const { isSidebarCollapsed, toggleSidebar } = useContext(NavigationContext);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className={classNames(
        styles.container,
        isSidebarCollapsed && styles.isCollapsed,
      )}
    >
      <div
        className={classNames(
          styles.fixedContainer,
          isSidebarCollapsed && styles.isCollapsed,
        )}
      >
        <header className={styles.header}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={"/icons/logo-large.svg"}
            alt="logo"
            className={classNames(
              styles.largeLogo,
              isSidebarCollapsed && styles.isCollapsed,
            )}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={"/icons/logo-small.svg"}
            alt="logo"
            className={classNames(
              styles.smallLogo,
              isSidebarCollapsed && styles.isCollapsed,
            )}
          />
          <Button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className={styles.menuButton}
            color={ButtonColor.default}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={isMobileMenuOpen ? "/icons/close.svg" : "/icons/menu.svg"}
              alt={isMobileMenuOpen ? "close menu" : "open menu"}
              className={styles.menuIcon}
            />
          </Button>
        </header>
        <div
          className={classNames(
            styles.menuOverlay,
            isMobileMenuOpen && styles.isMobileMenuOpen,
          )}
        />
        <nav
          className={classNames(
            `header-nav`,
            styles.nav,
            isMobileMenuOpen && styles.isMobileMenuOpen,
          )}
        >
          <ul className={styles.linkList}>
            {menuItems.map((menuItem, index) => (
              <MenuItemLink
                key={index}
                {...menuItem}
                isCollapsed={isSidebarCollapsed}
                isMobileMenuOpen={isMobileMenuOpen}
                isActive={router.pathname === menuItem.href}
              />
            ))}
          </ul>
          <ul className={styles.list}>
            <MenuItemButton
              text="Support"
              iconSrc="/icons/support.svg"
              isCollapsed={isSidebarCollapsed}
              isMobileMenuOpen={isMobileMenuOpen}
              onClick={() =>
                (window.location.href = "mailto:support@prolog-app.com")
              }
            />
            <MenuItemButton
              text="Collapse"
              iconSrc={
                isSidebarCollapsed
                  ? "/icons/arrow-right.svg"
                  : "/icons/arrow-left.svg"
              }
              isCollapsed={isSidebarCollapsed}
              isMobileMenuOpen={isMobileMenuOpen}
              onClick={() => toggleSidebar()}
              className={styles.collapseMenuItem}
            />
          </ul>
        </nav>
      </div>
    </div>
  );
}
