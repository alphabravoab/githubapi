import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { searchGithub, Sort } from "../tools/requests";
import { Repo } from "../type/Repo";

export const getSearch = createAsyncThunk(
    "search/fetchSearch",
    async(search: { q: string, sort: Sort }) => {
        const response = await searchGithub(search);
        return {
            history: search, result: response?.data.items
        }
    }
)

type SearchHistory = {
    q: string,
    sort: Sort,
}

export interface SearchInterface  {
    value: Array<{ history: SearchHistory, result: Array<Repo>}>;
    status: "idle" | "loading" | "succeeded"
}

const initialState: SearchInterface = {
    value: [],
    status: "idle"
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.value = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSearch.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getSearch.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.value = state.value.concat(action.payload as { history: SearchHistory, result: Array<Repo>});
            })
    }
})

export const { setSearch } = searchSlice.actions

export const selectSearch = (state: RootState) => state.search

export default searchSlice.reducer;
