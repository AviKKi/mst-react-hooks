import { useContext } from 'react'
import { useObserver } from 'mobx-react-lite'
import { storeContext } from "./store"
import { RootStoreType } from '../models/root.model'
import { CounterType } from '../models/counter.model'


/**
 * hook to use store data
 * @storeSelector a function that takes root store and returns selected store
 * @dataSelector a function that takes a store and returns map of selected data
 */
export const useStoreData = <Selection, ContextData, Store>(
    context: React.Context<ContextData>,
    storeSelector: (contextData: ContextData) => Store,
    dataSelector: (store: Store) => Selection
) => {
    const value = useContext(context)
    if (!value)
        throw new Error("React context not found, wrap your app around StoreProvider")

    const store = storeSelector(value)
    return useObserver(() => dataSelector(store))
}


/**
 * A hook to use counter store data
 * @param dataSelector a function that takes a store and returns map of selected data
 */
export const useCounterStore = <Selection>(dataSelector: (store: CounterType) => Selection) => {
    return useStoreData(storeContext, contextData => contextData?.counter!, dataSelector)
}

