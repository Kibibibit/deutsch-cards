
export interface Sheet {
    metadata: SheetMetadata
}

export interface SheetMetadata {
    sheetId: string
    sheetName: string
}

export const newSheet= (metadata :SheetMetadata): Sheet  => {
    return {
        metadata
    }
}

export interface StoreState {
    sheets: {[id: string]:Sheet}
    loaded: boolean
}

export const initialStoreState: StoreState = {
    sheets: {},
    loaded: false,
}