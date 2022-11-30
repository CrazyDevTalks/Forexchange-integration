import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DarkProvider } from '@/context/dark-context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DarkProvider>
        <Component {...pageProps} />
      </DarkProvider>
    </>
  );
}
