import { Button } from '@/components/Button';
import { Radio } from '@/components/Radio';
import { SubStepItem } from '@/components/SubStepItem';
import { useResource } from '@/providers/ResourceProvider';
import { Subject, requestPassage } from '@/remotes';
import { useState } from 'react';

const randomTopics = ['과학', '문학', '예술', '역사', '사회', '랜덤'] as const;

function getSubject(topic: (typeof randomTopics)[number]): Subject {
  switch (topic) {
    case '과학':
      return 'science';
    case '문학':
      return 'literature';
    case '예술':
      return 'art';
    case '역사':
      return 'history';
    case '사회':
      return 'social_science';
    case '랜덤':
      return 'random';
  }
}

export function RandomTopicStep() {
  const { step1 } = useResource();
  const { step, topicIndex, onTopicIndexChange, onPassageChange } = step1;

  const [loading, setLoading] = useState(false);

  return (
    <SubStepItem title="주제를 선택하세요." disabled={step != 1} delay={0.4}>
      <Radio.Group checkedIndex={topicIndex} onChange={onTopicIndexChange}>
        {randomTopics.map((topic) => (
          <Radio key={topic}>{topic}</Radio>
        ))}
      </Radio.Group>

      <Button
        style={{ width: 136 }}
        loading={loading}
        disabled={topicIndex == null}
        onClick={async () => {
          if (topicIndex == null) return;

          setLoading(true);
          const subject = getSubject(randomTopics[topicIndex]);

          try {
            const { passage } = await requestPassage(subject);
            onPassageChange(passage);
          } catch (e) {
            console.error(e);
          } finally {
            setLoading(false);
          }
        }}
      >
        지문 생성하기
      </Button>
    </SubStepItem>
  );
}
