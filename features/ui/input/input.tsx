import classNames from "classnames";
import styles from "./input.module.scss";

export enum InputTypes {
  email = "email",
  file = "file",
  number = "number",
  password = "password",
  tel = "tel",
  text = "text",
}

type InputProps = {
  name: string;
  type: InputTypes;
  label?: string;
  placeholder?: string;
  hint?: string;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  iconSrc?: string;
};

export function Input({
  name,
  type = InputTypes.text,
  label,
  placeholder,
  hint,
  error,
  errorMessage,
  disabled,
  iconSrc,
}: InputProps) {
  return (
    <>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.container}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {iconSrc && (
          <img
            className={classNames(styles.image, styles.icon)}
            src={iconSrc}
            alt="icon"
          />
        )}
        <input
          name={name}
          id={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className={classNames(
            styles.input,
            iconSrc && styles.icon,
            disabled && styles.disabled,
            error && styles.error,
          )}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {error && (
          <img
            className={classNames(styles.image, styles.error)}
            src="/icons/alert-error.svg"
            alt="error-icon"
          />
        )}
      </div>

      {hint && <div className={styles.hint}>{hint}</div>}
      {error && <div className={styles.errorMessage}>{errorMessage}</div>}
    </>
  );
}
