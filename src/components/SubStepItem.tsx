import { colors } from '@/constants/colors';
import { VStack } from './Stack';
import { Txt } from './Txt';
import { motion } from 'framer-motion';

type SubStepItemProps = {
  title: string;
  children: React.ReactNode;
  disabled?: boolean;
};

export function SubStepItem({
  title,
  children,
  disabled = false,
}: SubStepItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
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
