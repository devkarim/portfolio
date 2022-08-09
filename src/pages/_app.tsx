import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import AppHead from '../components/AppHead';
import wrapper from '../state/store';
import { withTRPC } from '@trpc/next';
import { AppRouter } from './api/trpc/[trpc]';

import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <AppHead />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : 'http://localhost:3000/api/trpc';

    return {
      url,
    };
  },
  ssr: true,
})(wrapper.withRedux(App));
