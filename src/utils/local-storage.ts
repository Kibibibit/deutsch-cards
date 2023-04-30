import { equals } from "ramda";

export const doLog = equals(localStorage.getItem('doLog'))('true')