import { append, has, map } from "ramda"
import { useAppSelector } from "../../redux/hooks"
import { Word, Noun, Verb } from "../../redux/interface"
import { RootState } from "../../redux/store"

interface BaseCardProps {
    getWordSet: (state:RootState) => string[],
    getWord: (x:string) => (state: RootState) => Word,
    getWords: (x:string[]) => (state:RootState) => Word[],
    wordKey: string
}

const BaseCard = ({getWordSet, getWord, getWords, wordKey}: BaseCardProps): JSX.Element => {


    const word = useAppSelector(getWord(wordKey))
    const wordSet = useAppSelector(getWordSet)

    const otherInds = [1,2,3]
    const otherKeys = map((i: number)=>wordSet[i])(otherInds)

    const words =  useAppSelector(getWords(otherKeys))

    const isNoun = (o: {}): o is Noun => {
        return has('singular')(o)
    }
    const isVerb = (o: {}): o is Verb => {
        return has('infinitive')(o)
    }

    const question = word.english
    let options

    if (isNoun(word.options)) {
        options = map((w:Noun)=>`${w.gender} ${w.singular}`)(map((w:Word)=>w.options as Noun)(words))
        options = append(`${(word.options as Noun).gender} ${(word.options as Noun).singular}`)(options)
    } else {
        options = map((w:Verb)=>`${w.infinitive}`)(map((w:Word)=>w.options as Verb)(words))
    }


    

    return <div>
        What is {question} in German?
        <div>
        {map((e:string)=><button key={e}>{e}</button>)(options)}
        </div>
    </div>

}


export default BaseCard