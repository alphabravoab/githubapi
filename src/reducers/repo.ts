import { createSlice } from "@reduxjs/toolkit"
import { Repo } from "../type/Repo";
import { RootState } from "../store";

interface RepoState {
    value: Repo[]
}

const initialState: RepoState = {
    value: []
}

export const repoSlice = createSlice({
    name: "repo",
    initialState,
    reducers: {
        setRepo: (state, action) => {
            // By converting it to a set inbetween we make sure we do not store duplicate repo's in the store.
            state.value = [...new Set(state.value.concat(action.payload))]
        },
    },
})

export const { setRepo } = repoSlice.actions

export const selectRepo = (idToFind: number) => (state: RootState) => state.repo.value.find(rep => rep.id === idToFind)

export default repoSlice.reducer;
