import { VStack } from '@/components/Stack';
import { StepTitle } from '@/components/StepTitle';
import { SelectQuestionTypeStep } from './SelectQuestionTypeStep';
import { Passage } from './Passage';
import { useResource } from '@/providers/ResourceProvider';
import { EditQuestionStep } from './EditQuestionStep';

export function CreateQuestion() {
  const { step2 } = useResource();
  const { step } = step2;

  return (
    <VStack gap={40} className="flex-1" padding={{ y: 24, x: 28 }}>
      <StepTitle
        step={2}
        title="Create Questions"
        description="Generate questions of various types."
      />

      <VStack gap={36}>
        <Passage />
        <SelectQuestionTypeStep />
        {step >= 2 && <EditQuestionStep />}
      </VStack>
    </VStack>
  );
}
