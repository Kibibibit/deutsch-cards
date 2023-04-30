import { compose, has, not } from "ramda";

export const hasNot = (s: string) => compose(not, has(s))