import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { Provider } from "react-redux";
import store from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <div className="max-w-[1140px] mx-auto p-5">
          <Component {...pageProps} />
        </div>
      </Provider>
    </>
  );
}

export default MyApp;
