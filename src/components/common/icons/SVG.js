import styled from "styled-components";

export const SVG = styled.svg`
  ${({ type, color, theme }) =>
    type && `${type}: ${theme[color ?? "primary100"]};`}
  transform: rotate(${({ rotate }) => rotate ?? 0}deg);
`;
