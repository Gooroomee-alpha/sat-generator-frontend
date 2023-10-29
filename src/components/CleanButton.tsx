import { ComponentProps } from "react";
import { Txt } from "./Txt";
import { colors } from "@/constants/colors";

type CleanButtonProps = ComponentProps<"button"> & {
  children?: React.ReactNode;
  active?: boolean;
};

export function CleanButton({
  children,
  active = false,
  ...props
}: CleanButtonProps) {
  return (
    <button
      className="flex h-fit p-[14px] rounded-[8px] hover:bg-grey200 transition-colors"
      {...props}
    >
      <Txt
        size={22}
        weight={active ? 700 : 500}
        color={active ? colors.blue500 : colors.grey700}
        className="whitespace-nowrap"
      >
        {children}
      </Txt>
    </button>
  );
}
