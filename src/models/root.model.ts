import { types, Instance } from 'mobx-state-tree'
import Counter from './counter.model'

export const RootStore = types.model('RootStore', {
    counter: types.optional(Counter, { count: 0 }),
})

export interface IRootStore extends Instance<typeof RootStore> { }
export type RootStoreType = typeof RootStore.Type

export const getDefaultStore: () => RootStoreType = () => RootStore.create({})