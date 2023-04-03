import { Loader } from "components/common/Loader";
import { RepoCard } from "components/RepoCard";
import { useRedux } from "hooks/use-redux";
import React from "react";
import { repositoriesSelector } from "store/repositories";
import * as S from "./styled";

export const RepoCards = () => {
  const { select } = useRedux();
  const { repositories, fetching } = select(repositoriesSelector);

  if (fetching) return <Loader />;

  return (
    <S.Wrapper>
      {repositories.map((item) => (
        <RepoCard key={item.id} repo={item} />
      ))}
    </S.Wrapper>
  );
};
