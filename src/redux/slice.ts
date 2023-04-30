import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SheetMetadata, initialStoreState, newSheet } from "./interface";
import { hasNot } from "../functional/has-not";
import { log } from "../utils/log";

const sheetsSlice = createSlice({
    name:'sheets',
    initialState: initialStoreState,
    reducers: {
        addSheet: (state, action: PayloadAction<SheetMetadata,string>) => {
            if (hasNot(action.payload.sheetId)(state.sheets)) {
                log.info(`Added new sheet ${action.payload.sheetName} (${action.payload.sheetId})`)
                state.sheets[action.payload.sheetId] = newSheet(action.payload)
            }
        },
        addNounData: (state) => {

        },
    }
})


export const { addSheet, addNounData } = sheetsSlice.actions;
export default sheetsSlice.reducer;