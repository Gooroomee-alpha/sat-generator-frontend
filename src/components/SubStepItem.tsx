import { colors } from '@/constants/colors';
import { VStack } from './Stack';
import { Txt } from './Txt';
import { motion } from 'framer-motion';

type SubStepItemProps = {
  id?: string;
  title: string;
  children: React.ReactNode;
  disabled?: boolean;
  delay?: number;
};

export function SubStepItem({
  id,
  title,
  children,
  disabled = false,
  delay = 0,
}: SubStepItemProps) {
  return (
    <motion.div
      id={id}
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', damping: 10, stiffness: 50, delay }}
    >
      <VStack gap={12} className="relative">
        <Txt size={20} weight={600} color={colors.grey900}>
          · {title}
        </Txt>
        <VStack gap={16} padding={{ x: 8 }}>
          {children}
        </VStack>

        {disabled && (
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </VStack>
    </motion.div>
  );
}
