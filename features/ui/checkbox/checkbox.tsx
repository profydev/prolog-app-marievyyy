import { useEffect, useRef } from "react";
import classNames from "classnames";
import styles from "./checkbox.module.scss";

export enum CheckboxSize {
  default = "default",
  small = "small",
  medium = "medium",
}

type CheckboxProps = {
  name?: string;
  labelText?: string;
  size?: CheckboxSize;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Checkbox({
  name,
  labelText,
  size = CheckboxSize.default,
  checked = false,
  disabled = false,
  indeterminate = false,
  ...props
}: CheckboxProps) {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const checkedRef = useRef<boolean>(checked);

  useEffect(() => {
    const isCheckedAndIndeterminate = checked && indeterminate;
    const checkbox = checkboxRef.current;

    if (isCheckedAndIndeterminate) {
      checkedRef.current = false;
      if (checkbox) checkbox.checked = checkboxRef.current !== null;
    } else {
      if (checkbox) checkbox.checked = checked;
    }
  }, [indeterminate, checked]);

  return (
    <div className={classNames(styles.checkbox, styles[size])}>
      <input
        className={classNames(
          styles.input,
          disabled && styles.disabled,
          indeterminate && styles.indeterminate,
        )}
        id={name}
        type="checkbox"
        name={name}
        ref={checkboxRef}
        defaultChecked={checked}
        disabled={disabled}
        {...props}
      />
      <label
        htmlFor={name}
        className={classNames(
          styles.label,
          !labelText && styles.noLabel,
          styles[size],
        )}
      >
        {labelText}
      </label>
    </div>
  );
}
