import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants";

const meta = {
  title: "Components/Button",
  component: Button,

  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      description: "The variant of the button",
      control: { type: "select" },
      options: BUTTON_VARIANTS,
    },
    size: {
      description: "The size of the button",
      control: { type: "select" },
      options: BUTTON_SIZES,
    },
    asChild: {
      description:
        "If true, the button will render the child as a linkable button",
      control: false,
    },
  },
  args: {
    children: "Button",
    disabled: false,
    asChild: false,
    size: "default",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};
