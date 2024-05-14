import "./styles.ts";
import { ButtonControl, CounterResult, CounterWrapper } from "./styles";
import { CounterProps } from "./types";
import Button from "components/Button/Button";


function Counter({ countValue, onMinusClick, onPlusClick }: CounterProps) {
  
  return (
    <CounterWrapper>
      <ButtonControl>
        <Button name="-" onButtonClick={onMinusClick}/>
      </ButtonControl>
      <CounterResult>{countValue}</CounterResult>
      <ButtonControl>
        <Button name="+" onButtonClick={onPlusClick}/>
      </ButtonControl>
    </CounterWrapper>
  );
}

export default Counter;
