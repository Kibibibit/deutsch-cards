import { keys, map } from "ramda"
import { RootState } from "./store"
import { Word } from "./interface"


export const selectNounSet = (state: RootState): string[] => {
    return keys(state.sheets.nouns) as string[]
}

export const selectVerbSet = (state: RootState): string[] => {
    return keys(state.sheets.verbs) as string[]
}

export const selectNoun = (noun: string) => (state: RootState): Word => {
    return state.sheets.nouns[noun]
}

export const selectVerb = (verb: string) => (state:RootState): Word => {
    return state.sheets.verbs[verb]
}

export const selectNouns = (nouns: string[]) => (state: RootState): Word[] => {
    return map((key:string) => state.sheets.nouns[key])(nouns)
}

export const selectVerbs = (verbs: string[]) => (state: RootState): Word[] => {
    return map((key:string) => state.sheets.verbs[key])(verbs)
}