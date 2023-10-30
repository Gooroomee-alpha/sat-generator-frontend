import { colors } from '@/constants/colors';
import { VStack } from './Stack';
import { Txt } from './Txt';
import { useResource } from '@/providers/ResourceProvider';
import { Step } from '@/types/model';

type StepButtonProps = {
  step: Step;
  title: string;
  shadowDirection?: 'left' | 'right';
};

export function StepButton({ step, title, shadowDirection }: StepButtonProps) {
  return (
    <div
      className="h-full"
      style={{
        boxShadow: `${
          shadowDirection === 'left' ? -4 : 4
        }px 0px 10px 0px rgba(0, 0, 0, 0.10)`,
      }}
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
    </div>
  );
}
