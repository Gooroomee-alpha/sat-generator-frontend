import { colors } from '@/constants/colors';
import { HStack, VStack } from './Stack';
import { Txt } from './Txt';

type StepTitleProps = {
  step: number;
  title: string;
  description?: string;
};

export function StepTitle({ step, title, description }: StepTitleProps) {
  return (
    <VStack gap={12}>
      <HStack gap={20} align="center">
        <Txt size={30} weight={700} color={colors.blue500}>
          {step}
        </Txt>
        <Txt size={24} weight={600} color={colors.grey900}>
          {title}
        </Txt>
      </HStack>

      {description && (
        <Txt size={18} weight={400} color={colors.grey600}>
          {description}
        </Txt>
      )}
    </VStack>
  );
}
