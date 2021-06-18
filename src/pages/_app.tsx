import "@styles/globals.css";
import { ThemeProvider } from "@material-ui/core";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
