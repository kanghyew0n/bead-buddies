import { Meta, StoryFn } from "@storybook/react";
import Button, { ButtonProps } from "../components/common/Button";
import ButtonGroup from "./ButtonGroup";

export default {
  title: "Common/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    role: {
      control: { type: "select", options: ["default", "point", "dark"] },
    },
    disabled: { control: "boolean" },
    size: {
      control: { type: "radio", options: ["sm", "md"] },
    },
    width: {
      control: { type: "radio", options: ["100%", "auto"] },
    },
    onClick: { action: "clicked" },
  },
} as Meta<ButtonProps>;

const Template: StoryFn<ButtonProps> = (args) => (
  <ButtonGroup>
    <Button {...args} role="default" />
    <Button {...args} role="point" />
    <Button {...args} role="dark" />
  </ButtonGroup>
);

// Default Button
export const Default = Template.bind({});
Default.args = {
  children: "Button",
  size: "md",
  disabled: false,
  width: "auto",
};

// Disabled Button
export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Button",
  size: "md",
  disabled: true,
  width: "auto",
};

// Full Width Button
export const FullWidth = Template.bind({});
FullWidth.args = {
  children: "Full Width Button",
  size: "md",
  disabled: false,
  width: "100%",
};

// Small Button
export const SmallButton = Template.bind({});
SmallButton.args = {
  children: "Small Button",
  size: "sm",
  disabled: false,
  width: "auto",
};
