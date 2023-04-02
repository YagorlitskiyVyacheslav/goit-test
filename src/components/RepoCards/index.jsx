import { Loader } from "components/common/Loader";
import { RepoCard } from "components/RepoCard";
import { useRedux } from "hooks/use-redux";
import React from "react";
import { repositoriesSelector } from "store/repositories";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-gap: 36px;
  margin-top: 18px;
  margin-bottom: 36px;
`;

export const RepoCards = () => {
  const { select } = useRedux();
  const { repositories, fetching } = select(repositoriesSelector);

  if (fetching) return <Loader />;

  return (
    <Wrapper>
      {repositories.map((item) => (
        <RepoCard key={item.id} repo={item} />
      ))}
    </Wrapper>
  );
};
