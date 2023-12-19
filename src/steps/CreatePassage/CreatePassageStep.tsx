import { VStack } from '@/components/Stack';
import { StepTitle } from '@/components/StepTitle';
import { useResource } from '@/providers/ResourceProvider';
import { EditPassageStep } from './EditPassageStep';
import { RandomTopicStep } from './RandomTopicStep';

export function CreatePassageStep() {
  const { step1 } = useResource();
  const { step } = step1;

  return (
    <VStack gap={40} className="flex-1" padding={{ y: 24, x: 28 }}>
      <StepTitle
        step={1}
        title="Create Passage"
        description="Craft an SAT-style passage on your chosen topic."
      />

      <VStack gap={36}>
        <RandomTopicStep />
        {step >= 2 && <EditPassageStep />}
      </VStack>
    </VStack>
  );
}
