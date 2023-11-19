import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { Repo } from "../type/Repo"

export interface HistoryState {
    value: Array<{search: string, results: Array<Repo> }>
}

const initialState: HistoryState = {
    value: []
}

export const searchHistory = createSlice({
    name: "searchHistory",
    initialState,
    reducers: {
        addToSearchHistory: (state, action) => {
            state.value = [...state.value, action.payload]
        }
    }
})

export const { addToSearchHistory } = searchHistory.actions

export const getHistorySearches = (state: RootState) => state.searchHistory.value

export default searchHistory.reducer;