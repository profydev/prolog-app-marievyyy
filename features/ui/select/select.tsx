import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import styles from "./select.module.scss";

type SelectProps = {
  name: string;
  label: string;
  placeholder: string;
  hint?: string;
  options: Array<string>;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  iconSrc?: string;
};

export function Select({
  name,
  label,
  placeholder,
  hint,
  iconSrc,
  options,
  disabled,
  error,
  errorMessage,
}: SelectProps) {
  const [showOption, setShowOption] = useState(false);
  const [value, setValue] = useState("");

  const selectEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (
        selectEl.current &&
        !selectEl.current.contains(event.target as Node)
      ) {
        setShowOption(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleShowOption = () => {
    if (!disabled) setShowOption(!showOption);
  };

  const handleSelectOption = (option: string) => {
    setShowOption(false);
    setValue(option);
  };

  return (
    <div ref={selectEl} className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <div
        className={classNames(
          styles.select,
          value && styles.filled,
          disabled && styles.disabled,
          error && styles.error,
        )}
        tabIndex={disabled ? -1 : 0}
        onClick={handleShowOption}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {iconSrc && (
          <img
            className={classNames(styles.image, styles.icon)}
            src={iconSrc}
            alt="icon"
          />
        )}
        <span>{value || placeholder}</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={classNames(styles.image, styles.arrow)}
          src="/icons/arrow-down.svg"
          alt="select-arrow"
        />
      </div>
      <ul
        className={classNames(
          styles.selectOption,
          showOption && styles.showOption,
        )}
      >
        {options?.map((option, index) => (
          <li
            key={index}
            value={option}
            onClick={() => handleSelectOption(option)}
            className={value === option ? styles.selected : ""}
          >
            {option}
          </li>
        ))}
      </ul>
      {hint && !error && <div className={styles.hint}>{hint}</div>}
      {error && <div className={styles.errorMessage}>{errorMessage}</div>}
    </div>
  );
}
