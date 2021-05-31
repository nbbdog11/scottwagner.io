import Head from "next/head";
import { createGlobalStyle } from "styled-components";

const GlobalStyling = createGlobalStyle`
  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 1.6;
    margin: 0;
    background-color: white;
    color: black;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto Slab', serif;
    margin: 0;
    font-weight: 600;
  }

  a {
    text-decoration: none;
    :visited {
      color: unset;
    }
  }

  * {
    box-sizing: border-box;
  }
`;

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Scott Wagner</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <GlobalStyling />
      <Component {...pageProps} />
    </>
  );
};

export default App;
