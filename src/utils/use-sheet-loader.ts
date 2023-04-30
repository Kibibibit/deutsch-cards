import { forEach, map } from "ramda"
import useApi from "./use-api"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { addSheet } from "../redux/slice"

const useSheetLoader = async () => {

    const api = useApi()
    const dispatch = useAppDispatch()

    const metadataResponse = await api.getSheetMetadata()

    const sheetsData = metadataResponse?.data?.sheets || []

    forEach((sheet: any) => {
        dispatch(addSheet({sheetId: sheet.properties.sheetId, sheetName:sheet.properties.title}))
    })(sheetsData);

    const sheetTitles = map((sheet: any) => sheet.properties.title)(sheetsData)
    forEach((sheet: any)=> {
        api.getSheetData(sheet).then(console.log)
    })(sheetTitles)

    

}

export default useSheetLoader