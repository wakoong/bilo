import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

import Page from "../components/Page";
import client from "../lib/apolloClient";

/**
 * Persisting layout between page changes
 * Keeping state when navigating pages
 * Custom error handling using componentDidCatch
 * Inject additional data into pages
 * Add global CSS
 *
 */
const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
};

export default MyApp;
