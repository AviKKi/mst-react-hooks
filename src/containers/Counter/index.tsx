import React from "react"
import Mark from '../../components/Mark'


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


export default CounterView