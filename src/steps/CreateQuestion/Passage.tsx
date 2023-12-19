import { SubStepItem } from '@/components/SubStepItem';
import { Txt } from '@/components/Txt';
import { useResource } from '@/providers/ResourceProvider';

export function Passage() {
  const { step1, step2 } = useResource();
  const { passage } = step1;
  const { step } = step2;

  if (!passage) return null;

  return (
    <SubStepItem title="Passage for Question Creation" delay={0.4} disabled={step != 1}>
      <Txt
        className="block times-font"
        style={{ width: '400px' }}
        dangerouslySetInnerHTML={{ __html: passage }}
      />
    </SubStepItem>
  );
}
