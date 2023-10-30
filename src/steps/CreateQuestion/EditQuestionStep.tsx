import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { HStack, VStack } from '@/components/Stack';
import { SubStepItem } from '@/components/SubStepItem';
import { Txt } from '@/components/Txt';
import { colors } from '@/constants/colors';
import { useResource } from '@/providers/ResourceProvider';
import { useEffect, useRef, useState } from 'react';

export function EditQuestionStep() {
  const { step2, onStepChange } = useResource();
  const {
    question,
    answer,
    choices,
    onQuestionChange,
    onAnswerChange,
    onChoicesChange,
  } = step2;
  const [isEditing, setIsEditing] = useState(false);

  const questionInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing) {
      questionInputRef.current?.focus();
      questionInputRef.current?.setSelectionRange(
        questionInputRef.current.value.length,
        questionInputRef.current.value.length
      );
    }
  }, [isEditing]);

  return (
    <SubStepItem title="생성된 문제를 확인하세요." id="edit-question">
      <VStack gap={12}>
        <Txt size={18} weight={600} color={colors.grey900}>
          문제 텍스트
        </Txt>

        {question && (
          <Input
            ref={questionInputRef}
            value={question}
            onChange={(e) => onQuestionChange(e.target.value)}
            disabled={!isEditing}
          />
        )}
      </VStack>

      <VStack gap={12}>
        <Txt size={18} weight={600} color={colors.grey900}>
          정답 보기
        </Txt>

        {answer && (
          <Input
            value={answer}
            onChange={(e) => onAnswerChange(e.target.value)}
            disabled={!isEditing}
          />
        )}
      </VStack>

      <VStack gap={12}>
        <Txt size={18} weight={600} color={colors.grey900}>
          오답 보기
        </Txt>

        {choices?.map((choice, index) => (
          <Input
            key={index}
            value={choice}
            disabled={!isEditing}
            onChange={(e) => {
              const newChoices = [...choices];
              newChoices[index] = e.target.value;
              onChoicesChange(newChoices);
            }}
          />
        ))}
      </VStack>

      <HStack gap={10}>
        <Button
          variant="secondary"
          onClick={() => {
            setIsEditing((editing) => !editing);
          }}
        >
          {isEditing ? '완료하기' : '편집하기'}
        </Button>
        {!isEditing && (
          <Button
            variant="primary"
            onClick={() => {
              onStepChange(3);
            }}
          >
            → 다음 단계로
          </Button>
        )}
      </HStack>
    </SubStepItem>
  );
}
