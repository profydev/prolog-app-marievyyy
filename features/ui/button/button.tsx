import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./button.module.scss";

export enum ButtonTextWeight {
  regular = "regular",
  semibold = "semibold",
}

export enum ButtonColor {
  primary = "primary",
  gray = "gray",
  error = "error",
  warning = "warning",
  success = "success",
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: string;
  fontWeight?: string;
  icon?: string;
};

export function Button({
  color = ButtonColor.primary,
  fontWeight = ButtonTextWeight.regular,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={classNames(
        styles.button,
        styles[color],
        styles[fontWeight],
        props.className,
      )}
    />
  );
}
