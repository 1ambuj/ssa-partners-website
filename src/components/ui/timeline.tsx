import * as React from "react";
import { cn } from "@/lib/utils";

type TimelineItemData = {
  step: string;
  title: string;
  description: string;
};

export function Timeline({
  items,
  className,
}: {
  items: TimelineItemData[];
  className?: string;
}) {
  return (
    <ol className={cn("relative border-l border-slate-700/80 pl-6", className)}>
      {items.map((item, index) => (
        <li key={`${item.step}-${index}`} className="mb-8 last:mb-0">
          <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border border-orange-400 bg-slate-950" />
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-orange-300">
            {item.step}
          </p>
          <h3 className="text-base font-semibold text-slate-100">{item.title}</h3>
          <p className="mt-1 text-sm text-slate-300">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}

