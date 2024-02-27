import React from "react";
import classNames from "classnames";
import styles from "./alert.module.scss";

export enum AlertColor {
  error = "error",
  warning = "warning",
  success = "success",
}

export enum AlertIcon {
  error = "/icons/alert-error.svg",
  warning = "warning", //replace this
  success = "success", //replace this
}

type AlertProps = {
  children: React.ReactNode;
  color?: AlertColor;
  icon?: AlertIcon;
  className?: string;
};

export function Alert({
  children,
  className,
  color = AlertColor.success,
  icon = AlertIcon.success,
}: AlertProps) {
  return (
    <div className={classNames(className, styles.container, styles[color])}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={icon} alt={`alert-${color}`} className={styles.icon} />
      {children}
    </div>
  );
}
