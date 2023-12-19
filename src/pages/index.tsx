import { HStack } from '@/components/Stack';
import { StepButton } from '@/components/StepButton';
import {
  ResourceContextType,
  ResourceProvider,
} from '@/providers/ResourceProvider';
import { ConfirmResultStep } from '@/steps/ConfirmResult/ConfirmResultStep';
import { CreatePassageStep } from '@/steps/CreatePassage/CreatePassageStep';
import { CreateQuestion } from '@/steps/CreateQuestion/CreateQuestionStep';
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

type Step2WithoutStep = Omit<ResourceContextType['step2'], 'step'>;
function getStep2Step(src: Step2WithoutStep): CreatePassageSubStep {
  const { choices } = src;
  if (choices != null) {
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

  /* step2: 문제 생성 */
  const [step2_passage, step2_setPassage] = useState<string>();
  const [step2_questionTypeIndex, step2_setQuestionTypeIndex] =
    useState<number>();
  const [step2_question, step2_setQuestion] = useState<string>();
  const [step2_answer, step2_setAnswer] = useState<string>();
  const [step2_choices, step2_setChoices] = useState<string[]>();

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

  const step2: Step2WithoutStep = useMemo(
    () => ({
      passage: step2_passage,
      questionTypeIndex: step2_questionTypeIndex,
      question: step2_question,
      answer: step2_answer,
      choices: step2_choices,
      onPassageChange: step2_setPassage,
      onQuestionTypeIndexChange: step2_setQuestionTypeIndex,
      onQuestionChange: step2_setQuestion,
      onAnswerChange: step2_setAnswer,
      onChoicesChange: step2_setChoices,
    }),
    [step2_answer, step2_choices, step2_question, step2_questionTypeIndex]
  );
  const step2_step: CreatePassageSubStep = getStep2Step(step2);

  const resource: ResourceContextType = useMemo(
    () => ({
      step,
      onStepChange: setStep,
      step1: {
        step: step1_step,
        ...step1,
      },
      step2: {
        step: step2_step,
        ...step2,
      },
    }),
    [step, step1_step, step1, step2_step, step2]
  );

  return (
    <ResourceProvider value={resource}>
      <HStack className="flex-1">
        {step === 1 ? (
          <CreatePassageStep />
        ) : (
          <StepButton step={1} title={'Passage'} shadowDirection="right" />
        )}

        {step === 2 ? (
          <CreateQuestion />
        ) : (
          <StepButton
            step={2}
            title={'Question'}
            shadowDirection={step < 2 ? 'left' : 'right'}
          />
        )}

        {step === 3 ? (
          <ConfirmResultStep />
        ) : (
          <StepButton step={3} title={'Result'} shadowDirection="left" />
        )}
      </HStack>
    </ResourceProvider>
  );
}
