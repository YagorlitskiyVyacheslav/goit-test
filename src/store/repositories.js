import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
    setQuery(state, actions) {
      state.query = actions.payload.length > 0 ? actions.payload : "react";
    },
    reset: () => init,
  },
  extraReducers: (builder) => {
    builder.addCase(getRepositoriesAsync.pending, (state) => {
      state.fetching = true;
    });
    builder.addCase(getRepositoriesAsync.fulfilled, (state, action) => {
      state.repositories = action.payload.items;
      state.meta = action.payload.meta;
      state.fetching = false;
    });
    builder.addCase(getRepositoriesAsync.rejected, (state) => {
      state.fetching = false;
    });
  },
});

// actions
export const { setQuery, reset } = repositories.actions;

// async actions
export const getRepositoriesAsync = createAsyncThunk(
  "repositories/get",
  async ({ q, page }, { getState, rejectWithValue }) => {
    const { repositories } = getState();

    try {
      const {
        data: { items, total_count },
      } = await searchApi.repositories({
        q,
        per_page: repositories.meta.perPage,
        page,
      });

      return {
        items,
        meta: {
          page: page ?? repositories.meta.page,
          perPage: repositories.meta.perPage,
          lastPage: Math.ceil(+total_count / repositories.meta.perPage),
          total: total_count,
        },
      };
    } catch (e) {
      handleErrors({ e });
      return rejectWithValue(e);
    }
  }
);

// selectors
export const repositoriesSelector = (state) => state.repositories;

// reducer
export default repositories.reducer;
