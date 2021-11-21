import "styles/globals.scss";

import { Provider } from "react-redux";
import { store, persistor } from "stores";
import { PersistGate } from "redux-persist/lib/integration/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
