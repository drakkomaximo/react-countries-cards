import { Alpha3Codes } from "../interfaces"

export const formatCountryNameByCode = ({alpha3Code}:{alpha3Code: string}) =>{
    return Alpha3Codes[alpha3Code] ? Alpha3Codes[alpha3Code] : alpha3Code
}