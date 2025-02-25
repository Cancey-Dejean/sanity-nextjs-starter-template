import { cn } from "@/lib/utils";

const containerSizes = {
  wide: "max-w-[1600px]",
  base: "max-w-[1440px]",
};

export default function Container({
  size = "wide",
  children,
  className,
}: {
  size?: keyof typeof containerSizes;
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mx-auto w-full", containerSizes[size], className)}>
      {children}
    </div>
  );
}
