import { identity } from "ramda"
import { doLog } from "./local-storage"


const _log = (l:(x:any)=>void) => doLog ? l : identity

const info = _log(console.log)
const warn = _log(console.warn)
const error = _log(console.error)

export const log = {
    info,
    warn,
    error
}