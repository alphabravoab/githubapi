import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import searchReducer from "./reducers/search"
import searchHistoryReducer from "./reducers/searchHistory"

export const store = configureStore({
  reducer: {
    search: searchReducer,
    searchHistory: searchHistoryReducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>