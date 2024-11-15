import { Provider } from "react-redux"
import { store } from "../store/store"
interface IStoreProvider {
  children: React.ReactNode
}
const StoreProvider = ({children}:IStoreProvider) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default StoreProvider