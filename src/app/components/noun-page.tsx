
import { selectNoun, selectNounSet, selectNouns } from "../../redux/selectors"
import { useAppSelector } from "../../redux/hooks"
import { useEffect, useState } from "react"
import BaseCard from "./base-card"

const NounPage = (): JSX.Element => {

    const [currentWord, setCurrentWord] = useState<string | undefined>(undefined)

    const wordSet = useAppSelector(selectNounSet)

    useEffect(()=> {
        console.log("running useEffect")
        setCurrentWord(wordSet[0])
    },[wordSet])



    return <div>
        {!!currentWord && <BaseCard 
            getWordSet={selectNounSet} 
            getWord={selectNoun} 
            getWords={selectNouns}
            wordKey={currentWord}
        />}

    </div>

}

export default NounPage