import { forwardRef } from 'react';

export type TxtBaseProps = {
  children?: React.ReactNode;
  size?: number;
  lineHeight?: number;
  weight?: 300 | 400 | 500 | 600 | 700;
  color?: string;
  align?: 'start' | 'center' | 'end';
  display?: 'block' | 'inline' | 'inline-block';
  ellipsis?: boolean;
};
export type TxtProps = React.ComponentPropsWithoutRef<'span'> & TxtBaseProps;

export const Txt = forwardRef<HTMLSpanElement, TxtProps>(function Txt(
  {
    children,
    size,
    lineHeight,
    weight,
    color,
    align,
    display,
    ellipsis = false,
    style,
    ...props
  },
  ref
) {
  return (
    <span
      ref={ref}
      style={{
        fontSize: size ? `${size - 2}px` : undefined,
        lineHeight: lineHeight ? `${lineHeight}px` : undefined,
        fontWeight: weight - 100,
        color: color,
        textAlign: align,
        display: display,
        overflow: ellipsis ? 'hidden' : undefined,
        textOverflow: ellipsis ? 'ellipsis' : undefined,
        whiteSpace: ellipsis ? 'nowrap' : undefined,
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
});
