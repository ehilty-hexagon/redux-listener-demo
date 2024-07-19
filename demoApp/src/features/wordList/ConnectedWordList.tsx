import {
    useSliceDispatch as useWordListDispatch,
    useSliceSelector as useWordListSelector,
    selectWords,
    selectWordsSorted,
    addWord,
    removeWord,
    clearWords,
} from "wordlist-state";
import { WordList } from "./WordList";

export const ConnectedWordList = () => {

    const dispatch = useWordListDispatch();

    return (
        <WordList
            words={useWordListSelector(selectWords)}
            sortedWords={useWordListSelector(selectWordsSorted)}
            onAddWord={(word) => dispatch(addWord(word))}
            onRemoveWord={(word) => dispatch(removeWord(word))}
            onClearWords={() => dispatch(clearWords())}/>
    );

}