import { Button } from '@/components/Button';
import { HStack } from '@/components/Stack';
import { SubStepItem } from '@/components/SubStepItem';
import { useResource } from '@/providers/ResourceProvider';
import { useEffect, useRef, useState } from 'react';

export function EditPassageStep() {
  const { onStepChange, step1 } = useResource();
  const { passage, onPassageChange } = step1;
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [passage]);

  useEffect(() => {
    if (isEditing) {
      textareaRef.current?.focus();
      textareaRef.current?.setSelectionRange(
        textareaRef.current.value.length,
        textareaRef.current.value.length
      );
    }
  }, [isEditing]);

  return (
    <SubStepItem title="Review the Generated Passage">
      <textarea
        ref={textareaRef}
        disabled={!isEditing}
        style={{ width: '400px', fontFamily: 'Times, sans-serif' }}
        value={passage}
        onChange={(e) => onPassageChange(e.target.value)}
      />

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
              onStepChange(2);
            }}
          >
            → Next Step
          </Button>
        )}
      </HStack>
    </SubStepItem>
  );
}
