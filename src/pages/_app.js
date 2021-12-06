import "styles/globals.scss";

import { Provider } from "react-redux";
import { store, persistor } from "stores";
import { PersistGate } from "redux-persist/lib/integration/react";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
          <ToastContainer autoClose={3000} pauseOnHover={false} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
