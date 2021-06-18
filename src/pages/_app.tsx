import "@styles/globals.css";
import { ThemeProvider } from "@material-ui/core";
import theme from "ui/themes/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
