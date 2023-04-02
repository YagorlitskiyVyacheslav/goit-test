import { createSlice } from "@reduxjs/toolkit";
import { searchApi } from "api/repositories";
import { handleErrors } from "utils/handleErrors";

const init = {
  repositories: [],
  fetching: true,
  query: "react",
  meta: {
    lastPage: 0,
    page: 1,
    total: 0,
    perPage: 20,
  },
};

const repositories = createSlice({
  name: "repositories",
  initialState: init,
  reducers: {
    setRepositories(state, actions) {
      state.repositories = actions.payload;
    },
    setQuery(state, actions) {
      state.query = actions.payload.length > 0 ? actions.payload : "react";
    },
    setMeta(state, actions) {
      state.meta = actions.payload;
    },
    setFetching(state, actions) {
      state.fetching = actions.payload;
    },
    reset: () => init,
  },
});

// actions
export const { setRepositories, setFetching, setQuery, setMeta, reset } =
  repositories.actions;

// selectors
export const repositoriesSelector = (state) => state.repositories;

// reducer
export default repositories.reducer;

export const getRepositoriesAsync = (q, page) => async (dispatch, _store) => {
  const { repositories } = _store();
  try {
    if (!repositories.fetching) dispatch(setFetching(true));
    const {
      data: { items, total_count },
    } = await searchApi.repositories({
      q,
      per_page: repositories.meta.perPage,
      page,
    });
    dispatch(setRepositories(items));
    dispatch(
      setMeta({
        page: page ?? repositories.meta.page,
        perPage: repositories.meta.perPage,
        lastPage: Math.ceil(+total_count / repositories.meta.perPage),
        total: total_count,
      })
    );
  } catch (e) {
    handleErrors({ e });
  } finally {
    dispatch(setFetching(false));
  }
};
