import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { HStack } from '@/components/Stack';
import { SubStepItem } from '@/components/SubStepItem';
import { useResource } from '@/providers/ResourceProvider';

const dummy =
  'Psychologists Dacher Keltner and Jonathan Haidt have argued that experiencing awe—a sensation of reverence and wonder typically brought on by perceiving something grand or powerful—can enable us to feel more connected to others and thereby inspire us to act more altruistically. Keltner, along with Paul K. Piff, Pia Dietze, and colleagues, claims to have found evidence for this effect in a recent study where participants were asked to either gaze up at exceptionally tall trees in a nearby grove (reported to be a universally awe-inspiring experience) or stare at the exterior of a nearby, nondescript building. After one minute, an experimenter deliberately spilled a box of pens nearby.';

export function InputTopicStep() {
  const { step1 } = useResource();
  const { step, topicInput, onTopicInputChange, onPassageChange } = step1;

  return (
    <SubStepItem title="주제를 입력하세요." disabled={step != 2}>
      <HStack gap={16}>
        <Input
          placeholder="ex) 기후 변화"
          value={topicInput}
          onChange={(e) => onTopicInputChange(e.target.value)}
        />
        <Button
          disabled={topicInput.length === 0}
          onClick={() => {
            onPassageChange(dummy);
          }}
        >
          생성
        </Button>
      </HStack>
    </SubStepItem>
  );
}
