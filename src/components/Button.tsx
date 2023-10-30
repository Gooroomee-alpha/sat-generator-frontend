import classNames from 'classnames';
import { Txt } from './Txt';
import { colors } from '@/constants/colors';
import { ComponentProps } from 'react';
import { Spinner } from './Spinner';

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  loading?: boolean;
};

export function Button({
  variant = 'primary',
  children,
  className,
  disabled,
  loading,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={classNames(
        'h-[50px] px-[24px] rounded-[12px] transition-colors w-fit',
        disabled
          ? 'bg-grey500'
          : {
              'bg-blue500 hover:bg-blue600': variant === 'primary',
              'bg-blue100 hover:bg-blue200': variant === 'secondary',
            },
        className
      )}
      {...props}
    >
      {loading ? (
        <Spinner size={20} />
      ) : (
        <Txt
          size={18}
          weight={600}
          color={variant === 'primary' ? colors.white : colors.blue500}
        >
          {children}
        </Txt>
      )}
    </button>
  );
}
