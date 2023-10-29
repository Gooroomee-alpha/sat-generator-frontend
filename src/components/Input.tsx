import { ComponentProps } from 'react';

type InputProps = ComponentProps<'input'>;

export function Input({ placeholder, ...props }: InputProps) {
  return (
    <input
      className="w-[400px] rounded-[8px] py-[12px] px-[16px] border-[2px] border-blue500 border-solid text-[18px] text-grey900 placeholder:text-grey500"
      {...props}
    />
  );
}
