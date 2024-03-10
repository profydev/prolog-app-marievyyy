import { Meta, StoryFn } from "@storybook/react";
import { Select } from "./select";

export default {
  title: "UI/Select",
  component: Select,
  parameter: {
    layout: "fullscreen",
  },
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = ({
  name,
  label,
  placeholder,
  hint,
  iconSrc,
  options,
  disabled,
  error,
  errorMessage,
}) => (
  <div style={{ padding: 10 }}>
    <Select
      name={name}
      label={label}
      placeholder={placeholder}
      hint={hint}
      iconSrc={iconSrc}
      options={options}
      disabled={disabled}
      error={error}
      errorMessage={errorMessage}
    />
  </div>
);

const option1 = [
  "Olivia Rhye",
  "David Smith",
  "Johnnie Courtney",
  "Lauren Tristen",
  "Taylor Noel",
];

export const Default = Template.bind({});
Default.args = {
  name: "select",
  label: "Team Member",
  placeholder: "Select Team Member",
  options: option1,
};
