import styled from "styled-components";
import { StyledCalcButtonProps } from ".";

export const Container = styled.button<StyledCalcButtonProps>`
  border: none;
  font-size: 16px;
  grid-row: ${(props) => props.gridRow};
  grid-column: ${(props) => props.gridColumn};
  font-weight: bold;
  background-color: transparent;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    display: flex;
    background-color: rgba(160, 160, 160, 0.199);
    transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }

  &:hover {
    span {
      background-color: rgba(214, 214, 214, 0.199);
    }
  }
`;

Container.defaultProps = {
  gridRow: "initial",
  gridColumn: "initial",
};
