import { colors } from '@/constants/colors';
import { CleanButton } from './CleanButton';
import { HStack } from './Stack';
import { Txt } from './Txt';
import { Category } from '@/types/model';
import { useRouter } from 'next/router';

export function GlobalHeader() {
  const router = useRouter();
  const category: Category = router.pathname === '/' ? 'one' : 'test';

  return (
    <HStack
      justify="center"
      padding={{ y: 2 }}
      className="w-full border-b border-solid border-grey400 sticky top-0 bg-white z-10"
    >
      <HStack
        gap={32}
        align="center"
        className="w-[1200px] max-w-full"
        padding={{ x: 30 }}
      >
        <HStack gap={10} align="center">
          <img src="/gooroomee-logo.png" width={64} height={64} alt="" />
          <Txt size={26} weight={700} color={colors.grey900}>
            구루미 SAT
          </Txt>
        </HStack>
      </HStack>
    </HStack>
  );
}
