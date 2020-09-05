import { AppProps } from "next/app";
import Page from "../components/styles/Page";
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
    <div>
      <Page />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
