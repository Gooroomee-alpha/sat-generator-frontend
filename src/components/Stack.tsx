import { ComponentPropsWithoutRef } from "react";
import { Padding } from "@/types/style";
import { getPaddingStyle } from "@/utils/style";

type StackProps<As extends React.ElementType = "div"> = {
  as?: As;
  children?: React.ReactNode;
  reverse?: boolean;
  gap?: number;
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "space-between" | "space-evenly";
  padding?: Padding;
  stackRef?: React.RefObject<HTMLElement> | React.LegacyRef<HTMLElement>;
} & ComponentPropsWithoutRef<As>;

const alignMap = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
};
const justifyMap = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  "space-between": "space-between",
  "space-evenly": "space-evenly",
};

function Stack<As extends React.ElementType = "div">({
  as: component = "div" as As,
  children,
  direction,
  reverse = false,
  gap = 0,
  align = "stretch",
  justify = "start",
  padding,
  style,
  stackRef,
  ...props
}: StackProps<As> & { direction: "row" | "column" }) {
  const Component = component as any;

  return (
    <Component
      style={{
        display: "flex",
        flexDirection: reverse ? `${direction}-reverse` : direction,
        alignItems: alignMap[align],
        justifyContent: justifyMap[justify],
        gap: `${gap}px`,
        padding: padding ? getPaddingStyle(padding) : undefined,
        ...style,
      }}
      ref={stackRef}
      {...props}
    >
      {children}
    </Component>
  );
}

export function HStack<As extends React.ElementType = "div">(
  props: StackProps<As>
) {
  return <Stack {...props} direction="row" />;
}
export function VStack<As extends React.ElementType = "div">(
  props: StackProps<As>
) {
  return <Stack {...props} direction="column" />;
}
