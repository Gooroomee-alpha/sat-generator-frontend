import { Button } from '@/components/Button';
import { Radio } from '@/components/Radio';
import { SubStepItem } from '@/components/SubStepItem';
import { useResource } from '@/providers/ResourceProvider';

const randomTopics = ['과학', '문학', '예술', '역사', '사회', '랜덤'];
const dummy =
  'Psychologists Dacher Keltner and Jonathan Haidt have argued that experiencing awe—a sensation of reverence and wonder typically brought on by perceiving something grand or powerful—can enable us to feel more connected to others and thereby inspire us to act more altruistically. Keltner, along with Paul K. Piff, Pia Dietze, and colleagues, claims to have found evidence for this effect in a recent study where participants were asked to either gaze up at exceptionally tall trees in a nearby grove (reported to be a universally awe-inspiring experience) or stare at the exterior of a nearby, nondescript building. After one minute, an experimenter deliberately spilled a box of pens nearby.';

export function RandomTopicStep() {
  const { step1 } = useResource();
  const { step, topicIndex, onTopicIndexChange, onPassageChange } = step1;

  return (
    <SubStepItem title="주제를 선택하세요." disabled={step != 1} delay={0.4}>
      <Radio.Group checkedIndex={topicIndex} onChange={onTopicIndexChange}>
        {randomTopics.map((topic) => (
          <Radio key={topic}>{topic}</Radio>
        ))}
      </Radio.Group>

      <Button
        disabled={topicIndex == null}
        onClick={() => {
          onPassageChange(dummy);
        }}
      >
        지문 생성하기
      </Button>
    </SubStepItem>
  );
}
