import { Button } from '@/components/Button';
import { Radio } from '@/components/Radio';
import { SubStepItem } from '@/components/SubStepItem';
import { useResource } from '@/providers/ResourceProvider';
import { ProblemType, requestProblem } from '@/remotes';
import { useState } from 'react';

const questionTypes = [
  'Complete the Sentence',
  'Main purpose',
  'Transition',
  'Convention of Standard English',
] as const;

function getProblemType(
  questionType: (typeof questionTypes)[number]
): ProblemType {
  switch (questionType) {
    case 'Complete the Sentence':
      return 'blank';
    case 'Main purpose':
      return 'find_subject';
    case 'Transition':
      return 'conjunction';
    case 'Convention of Standard English':
      return 'grammar';
  }
}

export function SelectQuestionTypeStep() {
  const { step1, step2 } = useResource();
  const { passage } = step1;
  const {
    step,
    questionTypeIndex,
    onPassageChange,
    onQuestionTypeIndexChange,
    onQuestionChange,
    onAnswerChange,
    onChoicesChange,
  } = step2;

  const [loading, setLoading] = useState(false);

  return (
    <SubStepItem
      title="Select Question Type"
      disabled={step != 1}
      delay={0.8}
    >
      <Radio.Group
        checkedIndex={questionTypeIndex}
        onChange={onQuestionTypeIndexChange}
      >
        {questionTypes.map((questionType) => (
          <Radio key={questionType}>{questionType}</Radio>
        ))}
      </Radio.Group>

      <Button
        style={{ width: 115 }}
        loading={loading}
        disabled={questionTypeIndex == null}
        onClick={async () => {
          if (questionTypeIndex == null) return;
          if (passage == null) return;

          setLoading(true);
          const problemType = getProblemType(questionTypes[questionTypeIndex]);

          try {
            const {
              passage: resultPassage,
              question,
              answer,
              choices,
            } = await requestProblem(passage, problemType);

            onPassageChange(resultPassage);
            onQuestionChange(question);
            onAnswerChange(answer);
            onChoicesChange(choices);

            setTimeout(() => {
              document
                .getElementById('edit-question')
                ?.scrollIntoView({ block: 'start', behavior: 'smooth' });
            }, 100);
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
