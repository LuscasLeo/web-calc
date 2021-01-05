import { evaluate } from "mathjs";
import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import CalcButton from "./CalcButton";

import { ButtonDispatchValue, CalculatorProvider } from "./CalcContext";
import {
  CalculatorContent,
  CalculatorInputButtons,
  CalculatorInputView,
  Container,
} from "./styles";

const Calculator: FC = () => {
  console.log("rendering...");
  const handleButtonPressed = (key: ButtonDispatchValue) => {
    if (typeof key === "string") setCalcInput(calcInput + key);
    else if (typeof key === "function") setCalcInput(String(key(calcInput)));
  };
  const [calcInput, setCalcInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const { current } = inputRef;
    current.value = calcInput;
    current.setSelectionRange(
      current.value.length - 1,
      current.value.length - 1
    );
  }, [calcInput]);

  return (
    <CalculatorProvider onButtonPressed={handleButtonPressed}>
      <Container>
        <CalculatorContent>
          <CalculatorInputView ref={inputRef} />
          <CalculatorInputButtons>
            <CalcButton value={(s) => ""}>C</CalcButton>
            <CalcButton value={(s) => s.slice(0, s.length - 1)}>Del</CalcButton>
            <CalcButton value="%">%</CalcButton>
            <CalcButton value="/">&divide;</CalcButton>

            <CalcButton value="7">7</CalcButton>
            <CalcButton value="8">8</CalcButton>
            <CalcButton value="9">9</CalcButton>
            <CalcButton value="*">X</CalcButton>

            <CalcButton value="4">4</CalcButton>
            <CalcButton value="5">5</CalcButton>
            <CalcButton value="6">6</CalcButton>
            <CalcButton value="-">-</CalcButton>

            <CalcButton value="1">1</CalcButton>
            <CalcButton value="2">2</CalcButton>
            <CalcButton value="3">3</CalcButton>
            <CalcButton value="+">+</CalcButton>

            <CalcButton gridColumn="span 2" value="0">
              0
            </CalcButton>
            <CalcButton value=",">,</CalcButton>
            <CalcButton value={(s) => evaluate(s)}>=</CalcButton>
          </CalculatorInputButtons>
        </CalculatorContent>
      </Container>
    </CalculatorProvider>
  );
};

export default Calculator;
