import MainLayout from "@components/common/MainLayout";
import "@styles/globals.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </QueryClientProvider>
  );
}
