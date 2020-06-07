import React from "react"
import Mark from '../../components/Mark'
import { useCounterStore } from '../../utils/storeHooks'

interface CounterProps {
    count: number,
    inc: () => void,
    dec: () => void
}

const CounterView: React.FC<CounterProps> = ({ count, inc, dec }) => (
    <>
        <h1 style={{ marginBottom: '1.3em', textAlign: 'center' }}>
            <Mark>Counter</Mark>
        </h1>
        <div className="container">
            <button onClick={dec} className="button button-round">-</button>
            <span className="count">{count || '0'}</span>
            <button onClick={inc} className="button button-round">+</button>
        </div>
    </>
);


const Counter: React.FC = () => {
    const counter = useCounterStore(counter => ({
        count: counter.count,
        inc: counter.inc,
        dec: counter.dec
    }))
    return <CounterView
        count={counter.count}
        inc={counter.inc}
        dec={counter.dec}
    />
}

// const Counter = () => useCounterStore(
//     ({ count, inc, dec }) => <CounterView
//         count={count}
//         inc={inc}
//         dec={dec}
//     />
// )

// const Counter = () => useCounterStore(CounterView)

export default Counter