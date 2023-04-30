
export interface Sheet {
    sheetName: string
}

export const newSheet= (sheetName:string): Sheet  => {
    return {
        sheetName:sheetName
    }
}

export interface StoreState {
    sheets: {[name: string]:Sheet}
    loaded: boolean
}

export const initialStoreState: StoreState = {
    sheets: {},
    loaded: false,
}