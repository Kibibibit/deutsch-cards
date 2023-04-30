import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialStoreState, newSheet } from "./interface";
import { hasNot } from "../functional/has-not";
import { log } from "../utils/log";

export const storeSlice = createSlice({
    name:'store',
    initialState: initialStoreState,
    reducers: {
        addSheet: (state, action: PayloadAction<string>) => {
            if (hasNot(action.payload)(state.sheets)) {
                log.info("Added new sheet")
                state.sheets[action.payload] = newSheet(action.payload)
            }
            
        }
    }
})