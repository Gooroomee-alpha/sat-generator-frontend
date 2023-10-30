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
    onCreateTypeChange: (createType: CreateType) => void;
    onTopicIndexChange: (index: number) => void;
    onTopicInputChange: (input: string) => void;
    onPassageChange: (passage: string) => void;
  };
  step2: {
    step: number;
    questionTypeIndex: number | undefined;
    question: string | undefined;
    answer: string | undefined;
    choices: string[] | undefined;
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
    onCreateTypeChange: () => {},
    onTopicIndexChange: () => {},
    onTopicInputChange: () => {},
    onPassageChange: () => {},
  },
  step2: {
    step: 1,
    questionTypeIndex: undefined,
    question: undefined,
    answer: undefined,
    choices: [],
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
