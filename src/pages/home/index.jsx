import { SearchForm } from "components/SearchForm";
import { useRedux } from "../../hooks/use-redux";
import React from "react";
import { useEffect } from "react";
import { getRepositoriesAsync, repositoriesSelector } from "store/repositories";
import { RepoCards } from "components/RepoCards";
import { Pagination } from "components/Pagination";

export const Home = () => {
  const { dispatch, select } = useRedux();
  const { query, meta } = select(repositoriesSelector);

  useEffect(() => {
    dispatch(getRepositoriesAsync(query));
  }, [dispatch, query]);

  return (
    <div>
      <SearchForm />
      <RepoCards />
      <Pagination
        {...meta}
        lastPage={meta.lastPage > 50 ? 50 : meta.lastPage}
        onPageChange={(page) => dispatch(getRepositoriesAsync(query, page))}
      />
    </div>
  );
};
