import { Button } from '@/components/Button';
import { Radio } from '@/components/Radio';
import { SubStepItem } from '@/components/SubStepItem';
import { useResource } from '@/providers/ResourceProvider';
import { ProblemType, requestProblem } from '@/remotes';
import { useState } from 'react';

const questionTypes = [
  '단어 빈칸 찾기',
  '주제 찾기',
  '접속사 빈칸 찾기',
  '문법 빈칸 찾기',
] as const;

function getProblemType(
  questionType: (typeof questionTypes)[number]
): ProblemType {
  switch (questionType) {
    case '단어 빈칸 찾기':
      return 'blank';
    case '주제 찾기':
      return 'find_subject';
    case '접속사 빈칸 찾기':
      return 'conjunction';
    case '문법 빈칸 찾기':
      return 'grammar';
  }
}

export function SelectQuestionTypeStep() {
  const { step1, step2 } = useResource();
  const { passage, onPassageChange } = step1;
  const {
    step,
    questionTypeIndex,
    onQuestionTypeIndexChange,
    onQuestionChange,
    onAnswerChange,
    onChoicesChange,
  } = step2;

  const [loading, setLoading] = useState(false);

  return (
    <SubStepItem title="주제를 선택하세요." disabled={step != 1} delay={0.8}>
      <Radio.Group
        checkedIndex={questionTypeIndex}
        onChange={onQuestionTypeIndexChange}
      >
        {questionTypes.map((questionType) => (
          <Radio key={questionType}>{questionType}</Radio>
        ))}
      </Radio.Group>

      <Button
        style={{ width: 136 }}
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
              problem,
              answer,
              choices,
            } = await requestProblem(passage, problemType);

            onPassageChange(resultPassage);
            onQuestionChange(problem);
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
        문제 생성하기
      </Button>
    </SubStepItem>
  );
}
