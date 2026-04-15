import * as React from "react";
import { cn } from "@/lib/utils";

export function Accordion({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-3", className)} {...props} />;
}

export function AccordionItem({
  className,
  value,
  children,
}: React.HTMLAttributes<HTMLDetailsElement> & { value: string }) {
  return (
    <details
      className={cn(
        "group rounded-lg border border-slate-700 bg-slate-900/60 p-4 text-slate-100",
        className
      )}
      data-value={value}
    >
      {children}
    </details>
  );
}

export function AccordionTrigger({
  className,
  children,
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <summary
      className={cn(
        "cursor-pointer list-none text-left font-medium marker:content-[''] [&::-webkit-details-marker]:hidden",
        className
      )}
    >
      {children}
    </summary>
  );
}

export function AccordionContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("pt-3 text-sm text-slate-300", className)} {...props} />;
}

