import { cn } from "@/lib/utils";

const titleSizes = {
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  h4: "text-h4",
  h5: "text-h5",
  h6: "text-h6",
};

export default function Heading({
  as: Comp = "h1",
  className,
  size = "h2",
  children,
  ...restProps
}: {
  as?: React.ElementType;
  size?: keyof typeof titleSizes;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Comp
      className={cn("leading-[1.1] text-inherit", titleSizes[size], className)}
      {...restProps}
    >
      {children}
    </Comp>
  );
}
