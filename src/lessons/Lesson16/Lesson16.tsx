import Counter from "components/Counter/Counter";
import { useState } from "react";

function Lesson16() {

    const [value, setValue] = useState<number>(0)

    const onMinus  = () => {
        setValue(prevValue => prevValue - 1)
    }

    const onPlus = () => {
        setValue(prevValue => prevValue + 1)
    }

    return (
        <Counter 
        countValue = {value}
        onMinusClick = {onMinus}
        onPlusClick = {onPlus}
        />
    )
}

export default Lesson16;