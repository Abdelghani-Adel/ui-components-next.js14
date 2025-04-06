"use client";

import { Button } from "@/components/shadcn/ui/button";
import { SidebarTrigger } from "@/components/shadcn/ui/sidebar";
import { DatePicker } from "@/components/shadcn/wrappers/DatePicker";
import DateRangePicker from "@/components/shadcn/wrappers/DateRangePicker";
import Sheet from "@/components/shadcn/wrappers/Sheet";
import Sidebar from "@/components/shadcn/wrappers/Sidebar";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export default function Home() {
  const [dateRange, setDateRange] = useState<DateRange>();

  return (
    <div className="flex gap-10 p-10  items-center justify-center">
      <DatePicker selected={new Date()} />
      <DateRangePicker value={dateRange} onChange={(range) => setDateRange(range)} />
      <Sheet title="Save Account" trigger={<Button variant="outline">Open Sheet</Button>}>
        <h1>Sheet</h1>
      </Sheet>
    </div>
  );
}
