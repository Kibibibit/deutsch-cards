import axios from "axios"
import { apiKey, baseUrl } from "./constants"

const useApi = () => {

    const url = (url: string) => `${url}?key=${apiKey}`

    const getSheetMetadata = async () => axios.get(url(baseUrl)).then((response)=>response).catch(e=>{console.error(e); return undefined})
    const getSheetData = async (sheetName: string) => axios.get(url(`${baseUrl}/values/${sheetName}!A1:Z1000`)).then((response)=>response).catch(e=>{console.error(e); return undefined})

    return {getSheetMetadata, getSheetData}



}


export default useApi