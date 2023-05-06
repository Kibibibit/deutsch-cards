import { equals, forEach, map } from "ramda"
import useApi from "./use-api"
import { useAppDispatch, useAppSelector } from "../redux/hooks"

const useSheetLoader = async () => {

    const api = useApi()
    const dispatch = useAppDispatch()

    const metadataResponse = await api.getSheetMetadata()
    console.log(metadataResponse)
    const sheetsData = metadataResponse?.data?.sheets || []

    console.log(sheetsData)

    const sheetTitles = map((sheet: any) => sheet.properties.title)(sheetsData)
    forEach((sheet: any)=> {
        api.getSheetData(sheet).then((response) => {
            if (equals(sheet)("Nouns")) {
                
                forEach((item) => {
                    console.log(item)
                })(response?.data.values)

            }
        })
    })(sheetTitles)

    

}

export default useSheetLoader