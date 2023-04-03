import styled from "styled-components";

export const StyledButton = styled.button`
  height: 40px;
  min-width: 30px;
  padding-bottom: 7px;
  :not(:disabled) {
    cursor: pointer;
  }
  :disabled {
    color: ${({ theme }) => theme.primary400};
  }
  font-family: "Archivo";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  border: none;
  background-color: transparent;
  line-height: 20px;
  color: ${({ theme }) => theme.primary300};
  border-bottom: 3px solid
    ${({ $active, theme }) => ($active ? theme.success : theme.success + "00")};
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const PagesWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
