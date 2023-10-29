import { CreateType, Step } from '@/types/model';
import { createContext, useContext } from 'react';

export type ResourceContextType = {
  step: Step;
  step1: {
    step: number;
    createType: CreateType | undefined;
    topicIndex: number | undefined;
    passage: string | undefined;
    onCreateTypeChange: (createType: CreateType) => void;
    onTopicIndexChange: (index: number) => void;
    onPassageChange: (passage: string) => void;
  };
};

const ResourceContext = createContext<ResourceContextType>({
  step: 1,
  step1: {
    step: 1,
    createType: undefined,
    topicIndex: undefined,
    passage: undefined,
    onCreateTypeChange: () => {},
    onTopicIndexChange: () => {},
    onPassageChange: () => {},
  },
});

export const ResourceProvider = ResourceContext.Provider;
export const ResourceConsumer = ResourceContext.Consumer;
export const useResource = () => {
  return useContext(ResourceContext);
};
