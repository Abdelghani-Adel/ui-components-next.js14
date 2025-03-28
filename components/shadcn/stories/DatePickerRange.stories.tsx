// stories/components/forms/DateRangePicker.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { addDays } from "date-fns";
import { DateRangePicker } from "../wrappers/DateRangePicker";

const meta: Meta<typeof DateRangePicker> = {
  title: "shadcn/DateRangePicker",
  component: DateRangePicker,
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: "select",
      options: ["start", "center", "end"],
    },
    onChange: { action: "dateRangeChanged" },
  },
};

export default meta;

type Story = StoryObj<typeof DateRangePicker>;

// Default DateRangePicker
export const Default: Story = {
  args: {
    placeholder: "Select date range",
  },
};

// With Default Range
export const WithDefaultRange: Story = {
  args: {
    defaultRange: {
      from: new Date(),
      to: addDays(new Date(), 7),
    },
  },
};

// With Minimum and Maximum Days
export const WithDayConstraints: Story = {
  args: {
    minDays: 3,
    maxDays: 14,
    placeholder: "Select 3-14 day range",
  },
};

// With Disabled Dates
export const WithDisabledDates: Story = {
  args: {
    disabledDates: [new Date(), addDays(new Date(), 1), addDays(new Date(), 2)],
  },
};

// Single Month Display
export const SingleMonth: Story = {
  args: {
    numberOfMonths: 1,
  },
};

// With Reset Button
export const WithResetOption: Story = {
  args: {
    showReset: true,
  },
};

// Disabled State
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

// Centered Alignment
export const Centered: Story = {
  args: {
    align: "center",
  },
};
