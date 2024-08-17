import { useState } from "react";

export const useCounter = () => {
    const [count, setCount] = useState<number>(10);

    const increaseBy = (num: number): void => {
        setCount(count + num);
    }

    const decreaseBy = (num: number): void => {
        setCount(count - num);
    }

    return {
        //Properties
        count,
        //Methods
        increaseBy,
        decreaseBy
    }
}