import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

function Badge({ className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-orange-400/60 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-300",
        className
      )}
      {...props}
    />
  );
}

export { Badge };

