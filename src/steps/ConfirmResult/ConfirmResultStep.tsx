import { Button } from '@/components/Button';
import { VStack } from '@/components/Stack';
import { StepTitle } from '@/components/StepTitle';
import { Txt } from '@/components/Txt';
import { useResource } from '@/providers/ResourceProvider';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export function ConfirmResultStep() {
  const { step1, step2 } = useResource();
  const { passage } = step1;
  const { question, choices } = step2;

  const router = useRouter();

  return (
    <VStack gap={40} className="flex-1" padding={{ y: 24, x: 28 }}>
      <StepTitle
        step={3}
        title="결과 확인하기"
        description="지문과 문제가 생성된 결과를 확인하세요."
      />

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 10, stiffness: 50, delay: 0.4 }}
      >
        <VStack gap={16}>
          <Txt
            className="block"
            style={{ width: '400px', fontFamily: 'Times, sans-serif' }}
          >
            {passage}
          </Txt>

          <Txt style={{ fontFamily: 'Times, sans-serif' }}>{question}</Txt>

          <VStack gap={5}>
            {choices?.map((choice, index) => (
              <Txt key={index} style={{ fontFamily: 'Times, sans-serif' }}>
                {choice}
              </Txt>
            ))}
          </VStack>

          <Button
            variant="primary"
            onClick={() => {
              router.reload();
            }}
          >
            ← 처음으로
          </Button>
        </VStack>
      </motion.div>
    </VStack>
  );
}
