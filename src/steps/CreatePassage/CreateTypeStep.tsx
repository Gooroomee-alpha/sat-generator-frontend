import { Button } from '@/components/Button';
import { HStack } from '@/components/Stack';
import { SubStepItem } from '@/components/SubStepItem';
import { useResource } from '@/providers/ResourceProvider';
import { CreateType } from '@/types/model';

const buttonText: Record<CreateType, string> = {
  random: '랜덤으로 가져오기',
  topic: '주제를 입력하기',
  past: '기출문제에서 가져오기',
};

export function CreateTypeStep() {
  const { step1 } = useResource();
  const { createType, onCreateTypeChange } = step1;

  return (
    <SubStepItem title="지문을 어떻게 생성할까요?" disabled={step1.step != 1}>
      <HStack gap={10}>
        {(Object.keys(buttonText) as CreateType[]).map((key) => (
          <Button
            key={key}
            variant={createType === key ? 'primary' : 'secondary'}
            onClick={() => onCreateTypeChange(key)}
          >
            {buttonText[key]}
          </Button>
        ))}
      </HStack>
    </SubStepItem>
  );
}
