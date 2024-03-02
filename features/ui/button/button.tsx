import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./button.module.scss";

export enum ButtonSize {
  default = "default",
  small = "small",
  medium = "medium",
  large = "large",
  xlarge = "xlarge",
}

export enum ButtonColor {
  default = "default",
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  empty = "empty",
  emptyGray = "emptyGray",
  error = "error",
  emptyError = "emptyError",
}

export enum ButtonIcon {
  default = "default",
  leading = "leading",
  trailing = "trailing",
  only = "only",
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  size?: ButtonSize;
  color?: ButtonColor;
  icon?: ButtonIcon;
  iconSrc?: string;
};

export function Button({
  children,
  size = ButtonSize.default,
  color = ButtonColor.default,
  icon = ButtonIcon.default,
  iconSrc,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={classNames(
        styles.button,
        styles[size],
        styles[color],
        styles[icon],
        props.className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {iconSrc && <img className={styles.image} src={iconSrc} alt="icon" />}
      {icon !== ButtonIcon.only && children}
    </button>
  );
}
