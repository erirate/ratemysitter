"use client";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster />
      <Sonner />
    </>
  );
}
