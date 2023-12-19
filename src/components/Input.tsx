import { ComponentPropsWithoutRef, forwardRef } from 'react';

type InputProps = ComponentPropsWithoutRef<'input'>;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { placeholder, ...props },
  ref
) {
  return (
    <input
      ref={ref}
      className="w-full rounded-[8px] py-[8px] px-[12px] border-[1.5px] border-blue500 border-solid text-[16px] text-grey900 placeholder:text-grey500"
      {...props}
    />
  );
});
