import { useCounter } from "../hooks/useCounter"

export const CounterWithHook = () => {
    const { count, increaseBy, decreaseBy } = useCounter();
    return (
        <>
            <h1>Counter</h1>
            <p>Current count: {count} </p>
            <div>
                <button onClick={ () => increaseBy(1)}>Increment</button>
                <button onClick={ () => decreaseBy(1)}>Decrement</button>
            </div>
        </>
    )

}