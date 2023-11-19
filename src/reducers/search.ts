import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

const initialState = {
    value: []
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setSearch } = searchSlice.actions

export const selectSearch = (state: RootState) => state.search.value

export default searchSlice.reducer;