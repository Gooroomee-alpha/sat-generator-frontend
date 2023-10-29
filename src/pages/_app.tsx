import { GlobalHeader } from '@/components/GlobalHeader';
import { VStack } from '@/components/Stack';
import '@/styles/globals.css';
import '@/styles/reset.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <VStack className="bg-grey100 h-screen" align="center">
      <GlobalHeader />
      <VStack className="flex-1 w-[1200px] max-w-full bg-white">
        <Component {...pageProps} />
      </VStack>
    </VStack>
  );
}
