
export interface Sheet {
    metadata: SheetMetadata
}



export interface Noun {
    gender: string | "der" | "die" | "die (plural)" | "das",
    singular: string,
    plural: string
}

export interface Verb {
    infinitive: string,
    type: string | "Modal" | "Sein/Haben" | "Regular" | "Irregular",
    first: string,
    second: string,
    third: string,
    wir: string,
    ihr: string,
    formal: string
}

export interface Word {
    english: string,
    options: Noun | Verb
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
    nouns: {[key: string]: Word}
    verbs: {[key: string]: Word}
    loaded: boolean
}

export const initialStoreState: StoreState = {
    nouns:{},
    verbs:{},
    loaded: false,
}