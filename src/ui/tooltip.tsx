import * as TooltipPrimitive from "@radix-ui/react-tooltip";
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
    <TooltipPrimitive.Provider delayDuration={50}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          <div className={cn("relative inline-flex text-center", className)}>
            {icon}
          </div>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side="top"
            align="center"
            sideOffset={10}
            collisionPadding={8}
            className={cn(
              "z-50 w-max max-w-[min(260px,var(--radix-tooltip-content-available-width))] whitespace-normal break-words rounded-xl border border-border/70 bg-card/95 px-3 py-2 text-xs text-foreground shadow-xl backdrop-blur-sm data-[state=delayed-open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=delayed-open]:fade-in-0 data-[side=top]:slide-in-from-bottom-1",
              contentClassName,
            )}
          >
            {children}
            <TooltipPrimitive.Arrow className="fill-card/95 stroke-border/70 [stroke-width:1px]" width={16} height={8} />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}

export { Tooltip };
