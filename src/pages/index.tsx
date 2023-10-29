import { HStack } from '@/components/Stack';
import { StepButton } from '@/components/StepButton';
import {
  ResourceContextType,
  ResourceProvider,
} from '@/providers/ResourceProvider';
import { CreatePassageStep } from '@/steps/CreatePassage/CreatePassageStep';
import { CreatePassageSubStep, CreateType, Step } from '@/types/model';
import { useMemo, useState } from 'react';

type Step1WithoutStep = Omit<ResourceContextType['step1'], 'step'>;
function getStep1Step(src: Step1WithoutStep): CreatePassageSubStep {
  const { createType, passage } = src;

  if (passage != null) {
    return 3;
  } else if (createType != null) {
    return 2;
  } else {
    return 1;
  }
}

export default function HomePage() {
  const [step, setStep] = useState<Step>(1);

  /* step1: 지문 생성 */
  const [step1_createType, step1_setCreateType] = useState<CreateType>();
  const [step1_topicIndex, step1_setTopicIndex] = useState<number>();
  const [step1_topicInput, step1_setTopicInput] = useState<string>('');
  const [step1_passage, step1_setPassage] = useState<string>();

  const step1: Step1WithoutStep = useMemo(
    () => ({
      createType: step1_createType,
      onCreateTypeChange: step1_setCreateType,
      topicIndex: step1_topicIndex,
      onTopicIndexChange: step1_setTopicIndex,
      topicInput: step1_topicInput,
      onTopicInputChange: step1_setTopicInput,
      passage: step1_passage,
      onPassageChange: step1_setPassage,
    }),
    [step1_createType, step1_topicIndex, step1_topicInput, step1_passage]
  );
  const step1_step: CreatePassageSubStep = getStep1Step(step1);

  const resource: ResourceContextType = useMemo(
    () => ({
      step,
      step1: {
        step: step1_step,
        ...step1,
      },
    }),
    [step, step1_step, step1]
  );

  return (
    <ResourceProvider value={resource}>
      <HStack className="flex-1">
        {step === 1 ? (
          <CreatePassageStep />
        ) : (
          <StepButton step={1} title={'지문\n생성'} />
        )}
        <StepButton step={2} title={'문제\n생성'} />
        <StepButton step={3} title={'결과\n확인'} />
      </HStack>
    </ResourceProvider>
  );
}
