"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/shadcn/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/shadcn/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/shadcn/ui/popover";

export type ComboboxOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

type ComboboxProps = {
  options: ComboboxOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  className?: string;
  buttonClassName?: string;
  popoverClassName?: string;
  trigger?: React.ReactNode;
  disabled?: boolean;
  required?: boolean;
};

export function ComboBox({
  options,
  value,
  onValueChange,
  placeholder = "Select an option...",
  searchPlaceholder = "Search...",
  emptyText = "No results found.",
  className,
  buttonClassName,
  popoverClassName,
  trigger,
  disabled = false,
  required = false,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState("");

  const currentValue = value ?? internalValue;
  const setValue = onValueChange ?? setInternalValue;

  const selectedOption = options.find((option) => option.value === currentValue);

  return (
    <div className={className}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild disabled={disabled}>
          {trigger ? (
            React.cloneElement(trigger as React.ReactElement, {
              "aria-expanded": open,
            })
          ) : (
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className={cn("w-full justify-between", !currentValue && "text-muted-foreground", buttonClassName)}
              disabled={disabled}
            >
              {selectedOption?.label || placeholder}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          )}
        </PopoverTrigger>
        <PopoverContent className={cn("w-[var(--radix-popover-trigger-width)] p-0", popoverClassName)}>
          <Command>
            <CommandInput placeholder={searchPlaceholder} />
            <CommandList>
              <CommandEmpty>{emptyText}</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                    disabled={option.disabled}
                  >
                    <Check
                      className={cn("mr-2 h-4 w-4", currentValue === option.value ? "opacity-100" : "opacity-0")}
                    />
                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
