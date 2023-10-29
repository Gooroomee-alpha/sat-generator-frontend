import { Button } from '@/components/Button';
import { HStack } from '@/components/Stack';
import { SubStepItem } from '@/components/SubStepItem';
import { Txt } from '@/components/Txt';
import { useResource } from '@/providers/ResourceProvider';

export function EditPassageStep() {
  const { step1 } = useResource();
  const { passage } = step1;

  return (
    <SubStepItem title="생성된 지문을 확인하세요.">
      <Txt
        className="block"
        style={{ width: '400px', fontFamily: 'Times, sans-serif' }}
      >
        {passage}
      </Txt>

      <HStack gap={10}>
        <Button variant="secondary">편집하기</Button>
        <Button variant="primary">→ 다음 단계로</Button>
      </HStack>
    </SubStepItem>
  );
}
