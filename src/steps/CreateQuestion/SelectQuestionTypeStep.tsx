import { Button } from '@/components/Button';
import { Radio } from '@/components/Radio';
import { SubStepItem } from '@/components/SubStepItem';
import { useResource } from '@/providers/ResourceProvider';

const questionTypes = [
  '단어 빈칸 찾기',
  '주제 찾기',
  '접속사 빈칸 찾기',
  '문법 빈칸 찾기',
];

const dummyQuestion = 'Fill in the blank.';
const dummyAnswer = 'example1';
const dummy = ['example2', 'example3', 'example4'];

export function SelectQuestionTypeStep() {
  const { step2 } = useResource();
  const {
    step,
    questionTypeIndex,
    onQuestionTypeIndexChange,
    onQuestionChange,
    onAnswerChange,
    onChoicesChange,
  } = step2;

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
        disabled={questionTypeIndex == null}
        onClick={() => {
          onQuestionChange(dummyQuestion);
          onAnswerChange(dummyAnswer);
          onChoicesChange(dummy);

          setTimeout(() => {
            document
              .getElementById('edit-question')
              ?.scrollIntoView({ block: 'start', behavior: 'smooth' });
          }, 100);
        }}
      >
        문제 생성하기
      </Button>
    </SubStepItem>
  );
}
