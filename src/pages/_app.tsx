import type { AppProps } from "next/app";
import Navbar from "../Components/Navbar";
import "../styles/globals.scss";
import { ThemeProvider } from "@mui/material";
import { Theme } from "../styles/theme/pallete";
import { EventsDataProvider } from "../context/UserContext";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <EventsDataProvider>
        <ThemeProvider theme={Theme}>
          <div className="main_cont">
            <Navbar />
          </div>
          <Component {...pageProps} />
        </ThemeProvider>
      </EventsDataProvider>
    </>
  );
}

export default MyApp;
