import { cx } from "../lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx("animate-pulse rounded-md dark:bg-zinc-800", className)}
      {...props}
    />
  );
}

export { Skeleton };
