"use client";

import { Button } from "@/components/shadcn/ui/button";
import AlertDialog from "@/components/shadcn/wrappers/AlertDialog";
import Dialog from "@/components/shadcn/wrappers/Dialog";

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Button variant="secondary">Test Button</Button>
    </div>
  );
}
