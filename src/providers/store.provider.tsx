import { Provider } from "react-redux";
import { store } from "../store/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(store);
interface IStoreProvider {
  children: React.ReactNode;
}
const StoreProvider = ({ children }: IStoreProvider) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
};

export default StoreProvider;
