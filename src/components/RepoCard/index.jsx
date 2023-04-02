import { ReactIcon } from "components/common/icons/ReactIcon";
import { Stars } from "components/common/icons/Stars";
import { UserIcon } from "components/common/icons/UserIcon";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 40px;
  width: 100%;
  background-color: ${({ theme }) => theme.secondary100};
  border-radius: 16px;
  display: flex;
`;

const BaseInfo = styled.div`
  margin-top: 2px;
  margin-left: 32px;
  max-width: 50%;
`;

const Title = styled.h2`
  font-family: "DM Serif Display";
  font-size: 22px;
  line-height: 25px;
  margin-bottom: 8px;
`;

const SubText = styled.p`
  font-size: 16px;
  line-height: 25px;
  margin-bottom: 2px;
  color: ${({ theme }) => theme.primary400};
`;

const Description = styled.h2`
  font-size: 16px;
  line-height: 25px;
  margin-top: 8px;
  color: ${({ theme }) => theme.secondary300};
`;

const IconWrapper = styled.div`
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

const Additional = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 60px;
`;

const AdditionalItem = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const AdditionalText = styled.p`
  font-size: 16px;
  line-height: 25px;
  color: ${({ theme }) => theme.primary100};
  span {
    font-weight: 600;
  }
`;

export const RepoCard = ({ repo }) => {
  return (
    <Wrapper>
      <IconWrapper>
        <ReactIcon color="secondary100" />
      </IconWrapper>
      <BaseInfo>
        <Title>{repo.name}</Title>
        <SubText>{repo.owner.login}</SubText>
        <SubText>{repo.language}</SubText>
        <Description>{repo.description}</Description>
      </BaseInfo>
      <Additional>
        <AdditionalItem>
          <Stars color="warning" />
          <AdditionalText>
            <span>{repo.stargazers_count}</span> stars
          </AdditionalText>
        </AdditionalItem>
        <AdditionalItem>
          <UserIcon color="secondary300" />
          <AdditionalText>
            <span>{repo.watchers} watchers</span>
          </AdditionalText>
        </AdditionalItem>
      </Additional>
    </Wrapper>
  );
};
