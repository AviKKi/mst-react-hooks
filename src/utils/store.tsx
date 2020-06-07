import React, { createContext } from "react"
import { useLocalStore } from 'mobx-react-lite'
import { getDefaultStore, RootStoreType } from "../models/root.model"

export const storeContext = createContext<RootStoreType | null>(null)

const StoreProvider: React.FC<{
  children: React.ReactNode
}> = ({
  children
}) => {
    const store = useLocalStore(getDefaultStore)
    return (
      <storeContext.Provider value={store}>
        {children}
      </storeContext.Provider>
    )
  }

export default StoreProvider