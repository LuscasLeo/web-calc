import React, { FC } from "react";
import { ButtonDispatchValue, useCalc } from "../CalcContext";
import { Container } from "./styles";

export interface StyledCalcButtonProps {
  gridRow?: string;
  gridColumn?: string;
}

export interface CalcButtonProps {
  value: ButtonDispatchValue;
}

const CalcButton: FC<StyledCalcButtonProps & CalcButtonProps> = ({
  value,
  children,
  gridColumn,
  gridRow,
}) => {
  const calc = useCalc();
  return (
    <Container
      onClick={() => calc.dispatchButton(value)}
      {...{ gridColumn, gridRow }}
    >
      <span>{children}</span>
    </Container>
  );
};

export default CalcButton;
