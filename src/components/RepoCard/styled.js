import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 40px;
  width: 100%;
  background-color: ${({ theme }) => theme.secondary100};
  border-radius: 16px;
  display: flex;
`;

export const BaseInfo = styled.div`
  margin-top: 2px;
  margin-left: 32px;
  max-width: 50%;
`;

export const Title = styled.h2`
  font-family: "DM Serif Display";
  font-size: 22px;
  line-height: 25px;
  margin-bottom: 8px;
`;

export const SubText = styled.p`
  font-size: 16px;
  line-height: 25px;
  margin-bottom: 2px;
  color: ${({ theme }) => theme.primary400};
`;

export const Description = styled.h2`
  font-size: 16px;
  line-height: 25px;
  margin-top: 8px;
  color: ${({ theme }) => theme.secondary300};
`;

export const IconWrapper = styled.div`
  width: 128px;
  height: 144px;
  background: linear-gradient(
    321.69deg,
    ${({ theme }) => theme.accent100} 0%,
    ${({ theme }) => theme.accent200} 100%
  );
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Additional = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 60px;
`;

export const AdditionalItem = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const AdditionalText = styled.p`
  font-size: 16px;
  line-height: 25px;
  color: ${({ theme }) => theme.primary100};
  span {
    font-weight: 600;
  }
`;
