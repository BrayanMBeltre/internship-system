import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import {
  QueryClient,
  QueryClientProvider,
  QueryOptions,
} from '@tanstack/react-query';
import { AppProps } from 'next/app';
import Router from 'next/router';
import nProgress from 'nprogress';
import { useState } from 'react';

import '@/styles/nprogress.css';
import '@/styles/globals.css';

import api from '@/lib/axios';

import DismissableToast from '@/components/DismissableToast';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

const defaultQueryFn = async ({ queryKey }: QueryOptions) => {
  const { data } = await api.get(`${queryKey?.[0]}`);
  return data;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <QueryClientProvider client={queryClient}>
        <div>
          <DismissableToast />
          <Component {...pageProps} />
        </div>
      </QueryClientProvider>
    </SessionContextProvider>
  );
}

export default MyApp;
