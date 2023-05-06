import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {  Noun, Verb, initialStoreState } from "./interface";
import { hasNot } from "../functional/has-not";

const sheetsSlice = createSlice({
    name:'sheets',
    initialState: initialStoreState,
    reducers: {
        addNoun: (state, action: PayloadAction<Noun,string>) => {
            if (hasNot(action.payload.english)(state.nouns)) {
                console.log(`Added new noun "${action.payload.english}" ("${action.payload.singular}")`)
                state.nouns[action.payload.english] = action.payload
            }
        },
        addVerb: (state, action: PayloadAction<Verb,string>) => {
            if (hasNot(action.payload.english)(state.verbs)) {
                console.log(`Added new verb "${action.payload.english}" ("${action.payload.infinitive}")`)
                state.verbs[action.payload.english] = action.payload
            }
        }
    }
})


export const { addNoun, addVerb } = sheetsSlice.actions;
export default sheetsSlice.reducer;