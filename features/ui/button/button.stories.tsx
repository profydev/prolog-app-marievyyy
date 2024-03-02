import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonSize, ButtonColor, ButtonIcon } from "./button";

export default {
  title: "UI/Button",
  component: Button,
  parameter: {
    layout: "fullscreen",
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = ({
  size,
  color,
  icon,
  iconSrc,
  children,
}) => (
  <div style={{ padding: 10 }}>
    <Button size={size} color={color} icon={icon} iconSrc={iconSrc}>
      {children}
    </Button>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: ButtonSize.medium,
  color: ButtonColor.primary,
  icon: ButtonIcon.trailing,
  iconSrc: "/icons/settings.svg",
  children: "Button CTA",
};
Default.parameters = {
  viewMode: "docs",
};
