import { Children, isValidElement } from 'react';
import { Icon } from './Icon';
import { HStack, VStack } from './Stack';
import { Txt } from './Txt';
import { colors } from '../constants/colors';
import React from 'react';

type RadioPublicProps = {
  children?: React.ReactNode;
};
type RadioPrivateProps = {
  checked: boolean;
  onClick: () => void;
};

function Radio({
  children,
  checked,
  onClick,
}: RadioPublicProps & RadioPrivateProps) {
  return (
    <HStack as="button" gap={8} align="center" onClick={onClick}>
      <Icon
        name={checked ? 'radio-check-true' : 'radio-check-false'}
        size={24}
      />
      <Txt size={18} weight={500} color={colors.grey800}>
        {children}
      </Txt>
    </HStack>
  );
}
function PublicRadio(_: RadioPublicProps) {
  return null;
}

PublicRadio.Group = RadioGroup;

type RadioGroupProps = {
  children?: React.ReactNode;
  checkedIndex: number | undefined;
  onChange?: (checkedIndex: number) => void;
};

function RadioGroup({ children, checkedIndex, onChange }: RadioGroupProps) {
  const childrenArray = Children.toArray(children);

  return (
    <HStack gap={16}>
      {childrenArray.map((child, i) => {
        if (!isValidElement<RadioPublicProps>(child)) {
          return null;
        }

        return (
          <Radio
            key={i}
            checked={checkedIndex === i}
            onClick={() => {
              onChange?.(i);
            }}
            {...child.props}
          />
        );
      })}
    </HStack>
  );
}

export { PublicRadio as Radio };
