import { Button } from '@/components/Button';
import { VStack } from '@/components/Stack';
import { StepTitle } from '@/components/StepTitle';
import { Txt } from '@/components/Txt';
import { useResource } from '@/providers/ResourceProvider';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export function ConfirmResultStep() {
  const { step1, step2 } = useResource();
  const { passage, question, choices } = step2;

  const router = useRouter();

  return (
    <VStack gap={40} className="flex-1" padding={{ y: 24, x: 28 }}>
      <StepTitle
        step={3}
        title="Review Results"
        description="Check the generated passage and question results."
      />

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 10, stiffness: 50, delay: 0.4 }}
      >
        <VStack gap={16}>
          {passage && (
            <Txt
              className='block times-font'
              style={{ width: '400px' }}
              dangerouslySetInnerHTML={{ __html: passage }}
            />
          )}

          <Txt className={'times-font'}>{question}</Txt>

          <VStack gap={5}>
            {choices?.map((choice, index) => (
              <Txt key={index} style={{ fontFamily: 'Times, sans-serif' }}>
                {String.fromCharCode(65 + index)}) {choice}
              </Txt>
            ))}
          </VStack>

          <Button
            variant="primary"
            onClick={() => {
              router.reload();
            }}
          >
            ← Back to Start
          </Button>
        </VStack>
      </motion.div>
    </VStack>
  );
}
