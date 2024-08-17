import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState<number>(10);

    const increaseBy = (num: number): void => {
        setCount(count + num);
    }

    const decreaseBy = (num: number): void => {
        setCount(count - num);
    }

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