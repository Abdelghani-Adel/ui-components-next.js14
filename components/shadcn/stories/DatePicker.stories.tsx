import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "../wrappers/DatePicker";

const meta: Meta<typeof DatePicker> = {
  title: "shadcn/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  argTypes: {
    onSelect: { action: "dateSelected" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

// Default DatePicker
export const Default: Story = {
  args: {
    placeholder: "Pick a date",
  },
};

// With Preselected Date
export const WithPreselectedDate: Story = {
  args: {
    selected: new Date(),
  },
};

// With Date Range
export const WithDateRange: Story = {
  args: {
    fromDate: new Date("2023-01-01"),
    toDate: new Date("2023-12-31"),
  },
};

// Disabled State
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

// Required Field
export const Required: Story = {
  args: {
    required: true,
  },
};
