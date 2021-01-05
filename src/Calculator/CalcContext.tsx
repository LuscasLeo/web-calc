import React from "react";
import { createContext, FC, useContext } from "react";

export type ButtonDispatchValue = string | ((data: string) => string);

export interface CalculatorContext {
  dispatchButton: (key: ButtonDispatchValue) => void;
}

const Context = createContext<CalculatorContext>({} as CalculatorContext);
const { Provider } = Context;

export interface CalculatorProviderProps {
  onButtonPressed: (value: ButtonDispatchValue) => void;
}
export const CalculatorProvider: FC<CalculatorProviderProps> = ({
  children,
  onButtonPressed,
}) => {
  const props = {
    dispatchButton(key: ButtonDispatchValue) {
      onButtonPressed(key);
    },
  };
  return <Provider value={props}>{children}</Provider>;
};

export const useCalc = () => useContext(Context);
