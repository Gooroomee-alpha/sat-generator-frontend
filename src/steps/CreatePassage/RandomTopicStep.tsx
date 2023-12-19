import { Button } from '@/components/Button';
import { Radio } from '@/components/Radio';
import { SubStepItem } from '@/components/SubStepItem';
import { useResource } from '@/providers/ResourceProvider';
import { Subject, requestPassage } from '@/remotes';
import { useState } from 'react';

const randomTopics = ['Science', 'Literature', 'Arts', 'Social Science', 'Random'] as const;

function getSubject(topic: (typeof randomTopics)[number]): Subject {
  switch (topic) {
    case 'Science':
      return 'science';
    case 'Literature':
      return 'literature';
    case 'Arts':
      return 'art';
    case 'Social Science':
      return 'social_science';
    case 'Random':
      return 'random';
  }
}

export function RandomTopicStep() {
  const { step1 } = useResource();
  const { step, topicIndex, onTopicIndexChange, onPassageChange } = step1;

  const [loading, setLoading] = useState(false);

  return (
    <SubStepItem title="Choose Your Topic" disabled={step != 1} delay={0.4}>
      <Radio.Group checkedIndex={topicIndex} onChange={onTopicIndexChange}>
        {randomTopics.map((topic) => (
          <Radio key={topic}>{topic}</Radio>
        ))}
      </Radio.Group>

      <Button
        style={{ width: 115 }}
        loading={loading}
        disabled={topicIndex == null}
        onClick={async () => {
          if (topicIndex == null) return;

          setLoading(true);
          const subject = getSubject(randomTopics[topicIndex]);

          try {
            const { passage, has_conjunction } = await requestPassage(subject);
            onPassageChange(passage);
          } catch (e) {
            console.error(e);
          } finally {
            setLoading(false);
          }
        }}
      >
        Generate
      </Button>
    </SubStepItem>
  );
}
