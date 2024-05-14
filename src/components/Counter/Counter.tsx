import "./styles.ts";
import { ButtonControl, CounterResult, CounterWrapper } from "./styles";
import Button from "components/Button/Button";
import { useState } from "react";


function Counter() {

  const [value, setValue] = useState<number>(0)

  const onMinus  = () => {
      setValue(prevValue => prevValue - 1)
  }

  const onPlus = () => {
      setValue(prevValue => prevValue + 1)
  }  

  const onDivide = () => {
    setValue((prevValue) => Math.round((prevValue / 2) * 100) / 100);
  }  

  const onMultiply = () => {
    setValue((prevValue) => Math.round((prevValue * 2) * 100) / 100);
  }  

  
  return (
    <CounterWrapper>
      <ButtonControl>
        <Button name="/" onButtonClick={onDivide}/>
      </ButtonControl>
      <ButtonControl>
        <Button name="-" onButtonClick={onMinus}/>
      </ButtonControl>
      <CounterResult>{value}</CounterResult>
      <ButtonControl>
        <Button name="+" onButtonClick={onPlus}/>
      </ButtonControl>
      <ButtonControl>
        <Button name="*" onButtonClick={onMultiply}/>
      </ButtonControl>
    </CounterWrapper>
  );
}

export default Counter;
