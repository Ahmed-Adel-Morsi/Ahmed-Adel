import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

interface TooltipProps {
  children: ReactNode;
  icon: ReactNode;
  className?: string;
  contentClassName?: string;
}

function Tooltip({
  children,
  icon,
  className,
  contentClassName,
}: TooltipProps) {
  return (
    <div
      className={cn(
        "relative inline-flex group/tooltip text-center",
        className,
      )}
    >
      {icon}
      <div
        role="tooltip"
        className={cn(
          "pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 z-50 w-max max-w-[260px] -translate-x-1/2 rounded-xl border border-border/70 bg-card/95 px-3 py-2 text-xs text-foreground opacity-0 shadow-xl backdrop-blur-sm transition-all duration-200 group-hover/tooltip:-translate-y-1 group-hover/tooltip:opacity-100 group-focus-within/tooltip:-translate-y-1 group-focus-within/tooltip:opacity-100",
          contentClassName,
        )}
      >
        {children}
        <span className="absolute left-1/2 top-full h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r border-border/70 bg-card/95" />
      </div>
    </div>
  );
}

export { Tooltip };
