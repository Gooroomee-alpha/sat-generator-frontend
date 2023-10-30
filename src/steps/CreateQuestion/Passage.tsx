import { SubStepItem } from '@/components/SubStepItem';
import { Txt } from '@/components/Txt';
import { useResource } from '@/providers/ResourceProvider';

export function Passage() {
  const { step1 } = useResource();
  const { passage } = step1;

  return (
    <SubStepItem title="문제 생성에 사용할 지문입니다." delay={0.4}>
      <Txt
        className="block"
        style={{ width: '400px', fontFamily: 'Times, sans-serif' }}
      >
        {passage}
      </Txt>
    </SubStepItem>
  );
}
