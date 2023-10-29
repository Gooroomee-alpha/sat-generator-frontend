import { colors } from '@/constants/colors';
import { VStack } from './Stack';
import { Txt } from './Txt';

type StepButtonProps = {
  step: number;
  title: string;
};

export function StepButton({ step, title }: StepButtonProps) {
  return (
    <button
      className="h-full"
      style={{ boxShadow: '-4px 0px 10px 0px rgba(0, 0, 0, 0.10)' }}
    >
      <VStack gap={12} className="w-[70px] h-full py-[40px]" align="center">
        <Txt size={30} weight={700} color={colors.blue500}>
          {step}
        </Txt>

        <Txt
          size={22}
          weight={600}
          color={colors.grey700}
          className="text-center whitespace-pre-line"
        >
          {title}
        </Txt>
      </VStack>
    </button>
  );
}
