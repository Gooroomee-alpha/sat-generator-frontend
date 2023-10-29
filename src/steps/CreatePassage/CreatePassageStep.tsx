import { VStack } from '@/components/Stack';
import { StepTitle } from '@/components/StepTitle';
import { CreateTypeStep } from './CreateTypeStep';
import { RandomTopicStep } from './RandomTopicStep';
import { useResource } from '@/providers/ResourceProvider';
import { SwitchCase } from '@toss/react';
import { EditPassageStep } from './EditPassageStep';

export function CreatePassageStep() {
  const { step1 } = useResource();
  const { step, createType, passage } = step1;

  return (
    <VStack gap={40} className="flex-1" padding={{ y: 24, x: 28 }}>
      <StepTitle
        step={1}
        title="지문 생성하기"
        description="BBC, Nature 등 신뢰있는 데서 가져온 글로 지문을 생성해보세요."
      />

      <VStack gap={36}>
        <CreateTypeStep />
        {step >= 2 && <>{createType === 'random' && <RandomTopicStep />}</>}
        {step >= 3 && <EditPassageStep />}
      </VStack>
    </VStack>
  );
}
