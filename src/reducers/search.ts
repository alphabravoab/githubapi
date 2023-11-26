import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { searchGithub, Sort } from "../tools/requests";
import { setRepo } from "./repo";

export const getSearch = createAsyncThunk(
    "search/fetchSearch",
    async(search: { q: string, sort: Sort }, thunkAPI) => {
        const response = await searchGithub(search);
        const transformResponse = response?.data.items.map(repo => {
            const repoWithId = repo
            thunkAPI.dispatch(setRepo(repoWithId))
          return repo.id
        });
        return {
            history: search, result: transformResponse
        }
    }
)

type SearchHistory = {
    q: string,
    sort: Sort,
}

export interface SearchInterface  {
    value: Array<{ history: SearchHistory, result: Array<number>}>;
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
                state.value = state.value.concat(action.payload as { history: SearchHistory, result: Array<number>});
            })
    }
})

export const selectSearch = (state: RootState) => state.search

export default searchSlice.reducer;
