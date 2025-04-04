"use client";

import Carousel from "@/components/shadcn/wrappers/Carousel";
import { DatePicker } from "@/components/shadcn/wrappers/DatePicker";
import DateRangePicker from "@/components/shadcn/wrappers/DateRangePicker";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export default function Home() {
  const [dateRange, setDateRange] = useState<DateRange>();

  return (
    <div className="flex gap-10 p-10 w-screen items-center justify-center">
      <DatePicker selected={new Date()} />
      <DateRangePicker value={dateRange} onChange={(range) => setDateRange(range)} />
    </div>
  );
}
