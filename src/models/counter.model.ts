import { types, Instance } from 'mobx-state-tree'

const Counter = types.model('Counter', {
    count: 0
})
    .actions(self => ({
        inc: () => self.count += 1,
        dec: () => self.count -= 1,
    }))

export interface ICounter extends Instance<typeof Counter> { }
export type CounterType = typeof Counter.Type

export default Counter
