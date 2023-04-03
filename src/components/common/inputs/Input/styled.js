import styled, { css } from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const InputCont = styled.div(({ theme, error }) => {
  return css`
    transition: all 0.2s linear;
    border: 1px solid ${error ? theme.danger : theme.secondary100};
    background-color: ${({ theme }) => theme.secondary100};
    height: 56px;
    box-shadow: 0px 4px 4px ${theme.shadow100}, 0px 4px 24px ${theme.shadow200};
    border-radius: 4px;
    padding: 5px 16px;
    :hover,
    :focus {
      filter: brightness(0.95);
      border: 1px solid ${error ? theme.danger : theme.accent200};
    }
  `;
});

export const Input = styled.input`
  outline: none;
  width: 100%;
  height: 100%;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  font-family: "Roboto";
  &:read-only {
    pointer-events: none;
  }
  border: none;
  border-radius: 8px;
  background-color: unset;

  &::placeholder {
    color: ${({ theme }) => theme.primary200};
  }
`;
