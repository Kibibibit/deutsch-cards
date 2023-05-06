import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {  Noun, initialStoreState, newSheet } from "./interface";
import { log } from "../utils/log";
import { append, compose, includes, not} from "ramda";

const sheetsSlice = createSlice({
    name:'sheets',
    initialState: initialStoreState,
    reducers: {
        addNoun: (state, action: PayloadAction<Noun,string>) => {
            if (compose(not, includes(action.payload))(state.nouns)) {
                log.info(`Added new noun ${action.payload.english}`)
                state.nouns = append(action.payload, state.nouns)
            }
        },
        addNounData: (state) => {

        },
    }
})


export const { addNoun } = sheetsSlice.actions;
export default sheetsSlice.reducer;