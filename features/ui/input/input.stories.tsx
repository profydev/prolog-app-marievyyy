import { Meta, StoryFn } from "@storybook/react";
import { Input, InputTypes } from "./input";

export default {
  title: "UI/Input",
  component: Input,
  parameter: {
    layout: "fullscreen",
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = ({
  name,
  type,
  label,
  placeholder,
  hint,
  error,
  errorMessage,
  disabled,
  iconSrc,
}) => (
  <div style={{ padding: 10 }}>
    <Input
      name={name}
      type={type}
      label={label}
      placeholder={placeholder}
      hint={hint}
      error={error}
      errorMessage={errorMessage}
      disabled={disabled}
      iconSrc={iconSrc}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  name: "input",
  type: InputTypes.text,
  label: "Email",
  placeholder: "olivia@untitledui.com",
  hint: "This is a hint text to help user.",
};
