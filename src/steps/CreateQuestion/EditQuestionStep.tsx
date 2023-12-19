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
    passage,
    question,
    answer,
    choices,
    onPassageChange,
    onQuestionChange,
    onAnswerChange,
    onChoicesChange,
  } = step2;
  const [isEditing, setIsEditing] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isEditing) {
      textareaRef.current?.focus();
      textareaRef.current?.setSelectionRange(
        textareaRef.current.value.length,
        textareaRef.current.value.length
      );
    }
  }, [isEditing]);

  if (!question || !answer || !choices) return null;
  const answerIndex = choices.indexOf(answer);

  return (
    <SubStepItem title="Review the Generated Question" id="edit-question">
      <VStack gap={12}>
        <Txt size={18} weight={600} color={colors.grey900}>
          Passage
        </Txt>

        {passage && (
          <textarea
            ref={textareaRef}
            disabled={!isEditing}
            style={{ width: '400px', fontFamily: 'Times, sans-serif' }}
            value={passage}
            onChange={(e) => onPassageChange(e.target.value)}
          />
        )}
      </VStack>

      <VStack gap={12}>
        <Txt size={18} weight={600} color={colors.grey900}>
          Question
        </Txt>

        {question && (
          <Input
            value={question}
            onChange={(e) => onQuestionChange(e.target.value)}
            disabled={!isEditing}
          />
        )}
      </VStack>

      <VStack gap={12}>
        <Txt size={18} weight={600} color={colors.grey900}>
          Correct Answer
        </Txt>

        <Input
          value={choices[answerIndex]}
          onChange={(e) => {
            const newChoices = [...choices];
            newChoices[answerIndex] = e.target.value;
            onChoicesChange(newChoices);
            onAnswerChange(e.target.value);
          }}
          disabled={!isEditing}
        />
      </VStack>

      <VStack gap={12}>
        <Txt size={18} weight={600} color={colors.grey900}>
          Incorrect Options
        </Txt>

        {choices.map((choice, index) =>
          index === answerIndex ? null : (
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
          )
        )}
      </VStack>

      <HStack gap={10}>
        <Button
          variant="secondary"
          onClick={() => {
            setIsEditing((editing) => !editing);
          }}
        >
          {isEditing ? 'Complete' : 'Edit'}
        </Button>
        {!isEditing && (
          <Button
            variant="primary"
            onClick={() => {
              onStepChange(3);
            }}
          >
            → Next Step
          </Button>
        )}
      </HStack>
    </SubStepItem>
  );
}
