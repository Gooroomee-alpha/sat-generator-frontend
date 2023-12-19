import { CreateType, Step } from '@/types/model';
import { createContext, useContext } from 'react';

export type ResourceContextType = {
  step: Step;
  onStepChange: (step: Step) => void;
  step1: {
    step: number;
    createType: CreateType | undefined;
    topicIndex: number | undefined;
    topicInput: string;
    passage: string | undefined;
    hasConjunction: boolean;
    onCreateTypeChange: (createType: CreateType) => void;
    onTopicIndexChange: (index: number) => void;
    onTopicInputChange: (input: string) => void;
    onPassageChange: (passage: string) => void;
    onHasConjunctionChange: (hasConjunction: boolean) => void;
  };
  step2: {
    step: number;
    passage: string | undefined;
    questionTypeIndex: number | undefined;
    question: string | undefined;
    answer: string | undefined;
    choices: string[] | undefined;
    onPassageChange: (passage: string) => void;
    onQuestionTypeIndexChange: (index: number) => void;
    onQuestionChange: (question: string) => void;
    onAnswerChange: (answer: string) => void;
    onChoicesChange: (choices: string[]) => void;
  };
};

const ResourceContext = createContext<ResourceContextType>({
  step: 1,
  onStepChange: () => {},
  step1: {
    step: 1,
    createType: undefined,
    topicIndex: undefined,
    topicInput: '',
    passage: undefined,
    hasConjunction: false,
    onCreateTypeChange: () => {},
    onTopicIndexChange: () => {},
    onTopicInputChange: () => {},
    onPassageChange: () => {},
    onHasConjunctionChange: () => {},
  },
  step2: {
    step: 1,
    passage: undefined,
    questionTypeIndex: undefined,
    question: undefined,
    answer: undefined,
    choices: [],
    onPassageChange: () => {},
    onQuestionTypeIndexChange: () => {},
    onQuestionChange: () => {},
    onAnswerChange: () => {},
    onChoicesChange: () => {},
  },
});

export const ResourceProvider = ResourceContext.Provider;
export const ResourceConsumer = ResourceContext.Consumer;
export const useResource = () => {
  return useContext(ResourceContext);
};
