import { anyPass, compose, equals, filter, forEach, includes, map } from "ramda"
import useApi from "./use-api"
import { Noun, Verb } from "../redux/interface"
import { useAppDispatch} from "../redux/hooks"
import { addNoun, addVerb } from "../redux/slice"

const useSheetLoader = async () => {

    const api = useApi()
    const dispatch = useAppDispatch()

    const metadataResponse = await api.getSheetMetadata()
    const sheetsData = metadataResponse?.data?.sheets || []

    const sheetTitles = map((sheet: any) => sheet.properties.title)(sheetsData)

    const filteredSheets = filter(anyPass([includes("Noun"), includes("Verb")]))(sheetTitles)

    forEach((sheet: any)=> {
        api.getSheetData(sheet).then((response) => {
            if (equals(sheet)("Nouns")) {
                
                forEach((item: string[]) => {

                    const noun: Noun = {
                        english: item[0],
                        gender: item[1],
                        singular: item[2],
                        plural: item[3],
                    }

                    compose(dispatch, addNoun)(noun)

                })(response?.data.values)

            }
            if (equals(sheet)("Verbs")) {
                forEach((item: string[]) => {
                    
                    const verb: Verb = {
                        english: item[0],
                        infinitive: item[1],
                        type: item[2],
                        first: item[3],
                        second: item[4],
                        third: item[5],
                        wir: item[6],
                        ihr: item[7],
                        formal: item[8]
                    }

                    compose(dispatch, addVerb)(verb)

                })(response?.data.values)
            }
        })
    })(filteredSheets)

    

}

export default useSheetLoader