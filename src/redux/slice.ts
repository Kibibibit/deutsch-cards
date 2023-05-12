import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Word, Noun, Verb, initialStoreState } from "./interface";
import { hasNot } from "../functional/has-not";

const sheetsSlice = createSlice({
    name:'sheets',
    initialState: initialStoreState,
    reducers: {
        addNoun: (state, action: PayloadAction<Word,string>) => {
            if (hasNot(action.payload.english)(state.nouns)) {
                const options: Noun = action.payload.options as Noun
                console.log(`Added new noun "${action.payload.english}" ("${options.singular}")`)
                state.nouns[action.payload.english] = action.payload
            }
        },
        addVerb: (state, action: PayloadAction<Word,string>) => {
            if (hasNot(action.payload.english)(state.verbs)) {
                const options: Verb = action.payload.options as Verb
                console.log(`Added new verb "${action.payload.english}" ("${options.infinitive}")`)
                state.verbs[action.payload.english] = action.payload
            }
        }
    }
})


export const { addNoun, addVerb } = sheetsSlice.actions;
export default sheetsSlice.reducer;