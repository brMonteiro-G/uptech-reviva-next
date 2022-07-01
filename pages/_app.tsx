import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { SearchBar } from 'components/Header/SearchBar/SearchBar';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head'; 
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

const GlobalStyle = createGlobalStyle`
body{
        font-family: $font-family-page;
        text-decoration: none;
        overflow-x:hidden ;
        scroll-behavior: smooth;
        box-sizing:border-box;
        padding:0;
        margin:0;
}
*{
  text-decoration:none;
  color:inherit;
  
}

`;

const theme = {
  colors: {
    primary_color: '#FFEF82',

    secondary_color: '#EFD345',

    tertiary_color: '#BABD42',

    quaternary_color: '#82954B',
  },

  fonts: {
    font_size_text: '1em',

    font_size_title: '3em',

    font_size_subtitle: '4em',

    font_family_page: "'Roboto', sans serif",

    font_weight_text: '300',

    font_weight_title: 'bold',
  },
};

ThemeProvider.displayName = 'Themes';


export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }:AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head >
          <>
          <link rel="shortchut icon" href="/" />
          <title>Reviva Fashion</title>
          </>
          
        </Head>
        <Header />
        <SearchBar />

        <Component {...pageProps}/>

        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
