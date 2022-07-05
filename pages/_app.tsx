import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { InferGetStaticPropsType, NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { SearchBar } from 'components/Header/SearchBar/SearchBar';
import { StorageProvider } from 'state/contexts/StorageContext';
import { theme } from '../styles/ThemeProvider';
import { GlobalStyle } from '../styles/globalStyle';
import { Items } from '@/components/WindowShopper/Products';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
          <>
            <link rel='shortchut icon' href='/' />
            <title>Reviva Fashion</title>
          </>
        </Head>

        <Header />
        <SearchBar />

        <Component {...pageProps} />

        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
