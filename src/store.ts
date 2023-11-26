import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./reducers/search";
import repoReducer from "./reducers/repo";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    repo: repoReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

