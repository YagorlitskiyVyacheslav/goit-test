import { ReactIcon } from "components/common/icons/ReactIcon";
import { Stars } from "components/common/icons/Stars";
import { UserIcon } from "components/common/icons/UserIcon";
import React from "react";
import * as S from "./styled";

export const RepoCard = ({ repo }) => {
  return (
    <S.Wrapper>
      <S.IconWrapper>
        <ReactIcon color="secondary100" />
      </S.IconWrapper>
      <S.BaseInfo>
        <S.Title>{repo.name}</S.Title>
        <S.SubText>{repo.owner.login}</S.SubText>
        <S.SubText>{repo.language}</S.SubText>
        <S.Description>{repo.description}</S.Description>
      </S.BaseInfo>
      <S.Additional>
        <S.AdditionalItem>
          <Stars color="warning" />
          <S.AdditionalText>
            <span>{repo.stargazers_count}</span> stars
          </S.AdditionalText>
        </S.AdditionalItem>
        <S.AdditionalItem>
          <UserIcon color="secondary300" />
          <S.AdditionalText>
            <span>{repo.watchers} watchers</span>
          </S.AdditionalText>
        </S.AdditionalItem>
      </S.Additional>
    </S.Wrapper>
  );
};
