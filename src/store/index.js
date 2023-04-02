import { configureStore } from "@reduxjs/toolkit";
import repositories from "./repositories";

const store = configureStore({
  reducer: {
    repositories,
  },
});

export default store;
