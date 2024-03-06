import { Meta, StoryFn } from "@storybook/react";
import { Checkbox, CheckboxSize } from "./checkbox";

export default {
  title: "UI/Checkbox",
  component: Checkbox,
  parameter: {
    layout: "fullscreen",
  },
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = ({
  name,
  labelText,
  size,
  checked,
  disabled,
  indeterminate,
}) => (
  <div style={{ padding: 10 }}>
    <Checkbox
      size={size}
      name={name}
      labelText={labelText}
      checked={checked}
      disabled={disabled}
      indeterminate={indeterminate}
    ></Checkbox>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  name: "checkbox",
  labelText: "Label",
  size: CheckboxSize.medium,
  checked: false,
  disabled: false,
  indeterminate: false,
};
Default.parameters = {
  viewMode: "docs",
};
