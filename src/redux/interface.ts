
export interface Sheet {
    metadata: SheetMetadata
}

export interface Noun {
    english: string,
    gender: "der" | "die" | "die (plural)" | "das",
    singular: string,
    plural: string
}

export interface Verb {
    english: string,
    infinitive: string,
    type: "Modal" | "Sein/Haben" | "Regular" | "Irregular"
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
    nouns: Noun[]
    verbs: Verb[]
    loaded: boolean
}

export const initialStoreState: StoreState = {
    nouns:[],
    verbs:[],
    loaded: false,
}