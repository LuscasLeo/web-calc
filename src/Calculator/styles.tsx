import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CalculatorContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: #3a3a3a;
  padding: 1px;

  display: flex;
  flex-direction: column;
`;

export const CalculatorInputView = styled.input`
  height: 100px;
  width: 100%;
  background-color: #eee;
  border: none;
  white-space: nowrap;
  font-size: 3rem;
`;
export const CalculatorInputButtons = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: #333;
`;
