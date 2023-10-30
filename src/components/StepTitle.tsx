import { colors } from '@/constants/colors';
import { HStack, VStack } from './Stack';
import { Txt } from './Txt';
import { motion } from 'framer-motion';

type StepTitleProps = {
  step: number;
  title: string;
  description?: string;
};

export function StepTitle({ step, title, description }: StepTitleProps) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', damping: 10, stiffness: 50 }}
    >
      <VStack gap={12}>
        <HStack gap={20} align="center">
          <Txt size={30} weight={700} color={colors.blue500}>
            {step}
          </Txt>
          <Txt size={24} weight={600} color={colors.grey900}>
            {title}
          </Txt>
        </HStack>

        {description && (
          <Txt size={18} weight={400} color={colors.grey600}>
            {description}
          </Txt>
        )}
      </VStack>
    </motion.div>
  );
}
