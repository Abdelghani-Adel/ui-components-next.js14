import type { Meta, StoryObj } from "@storybook/react";
import { ComboBox } from "../wrappers/ComboBox";
import { Button } from "../ui/button";
import { Globe } from "lucide-react";

const meta: Meta<typeof ComboBox> = {
  title: "shadcn/ComboBox",
  component: ComboBox,
  tags: ["autodocs"],
  argTypes: {
    onValueChange: { action: "valueChanged" },
  },
};

export default meta;
type Story = StoryObj<typeof ComboBox>;

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "svelte", label: "SvelteKit" },
  { value: "astro", label: "Astro" },
  { value: "remix", label: "Remix" },
  { value: "nuxt", label: "Nuxt.js" },
];

// Basic ComboBox
export const Primary: Story = {
  args: {
    options: frameworks,
    placeholder: "Select a framework...",
  },
};

// With Default Value
export const WithDefaultValue: Story = {
  args: {
    options: frameworks,
    value: "next",
  },
};

// Disabled State
export const Disabled: Story = {
  args: {
    options: frameworks,
    disabled: true,
  },
};

// With Custom Trigger
export const CustomTrigger: Story = {
  render: (args) => (
    <ComboBox
      {...args}
      trigger={
        <Button variant="outline" className="w-64 justify-start gap-2">
          <Globe className="h-4 w-4" />
          {args.options.find((o) => o.value === args.value)?.label || "Select country"}
        </Button>
      }
    />
  ),
  args: {
    options: [
      { value: "us", label: "United States" },
      { value: "uk", label: "United Kingdom" },
      { value: "ca", label: "Canada" },
    ],
  },
};

// With Search
export const WithSearch: Story = {
  args: {
    options: Array.from({ length: 50 }, (_, i) => ({
      value: `item-${i}`,
      label: `Item ${i + 1}`,
    })),
    searchPlaceholder: "Search items...",
    emptyText: "No items found",
  },
};

// Required Field
export const Required: Story = {
  args: {
    options: frameworks,
    required: true,
  },
};

// Disabled Options
export const WithDisabledOptions: Story = {
  args: {
    options: frameworks.map((f, i) => ({
      ...f,
      disabled: i % 2 === 0, // Disable every other option
    })),
  },
};
