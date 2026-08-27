import { cn } from "@/lib/utils";

export function SectionHeader({ index, icon: Icon, title, action, className }) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-4 mb-4 sm:mb-6",
        className,
      )}
    >
      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
        {index && (
          <span className="hidden sm:flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-heading text-xs font-semibold text-primary tabular-nums">
            {index}
          </span>
        )}
        <div className="flex items-center gap-2 min-w-0">
          {Icon && <Icon className="w-5 h-5 shrink-0 text-primary" />}
          <h2 className="truncate font-heading text-xl sm:text-2xl font-bold tracking-tight">
            {title}
          </h2>
        </div>
      </div>
      {action}
    </div>
  );
}
