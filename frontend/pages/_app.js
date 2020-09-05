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
    <React.Fragment>
      <Page />
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default MyApp;
