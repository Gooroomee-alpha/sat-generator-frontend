import { CreateType, Step } from '@/types/model';
import { createContext, useContext } from 'react';

export type ResourceContextType = {
  step: Step;
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
};

const ResourceContext = createContext<ResourceContextType>({
  step: 1,
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
});

export const ResourceProvider = ResourceContext.Provider;
export const ResourceConsumer = ResourceContext.Consumer;
export const useResource = () => {
  return useContext(ResourceContext);
};
