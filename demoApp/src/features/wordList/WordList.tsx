import { useState } from "react";
import { Display } from "./Display";
import styles from "./WordList.module.css";
import {
    useSliceDispatch as useWordListDispatch,
    useSliceSelector as useWordListSelector,
    selectWords,
    selectWordsSorted,
    addWord,
    removeWord,
    clearWords,
 } from "wordlist-state";

export const WordList = () => {
    
    const dispatch = useWordListDispatch();
    const words = useWordListSelector(selectWords);
    const sortedWords = useWordListSelector(selectWordsSorted);
    const [wordToAddOrRemove, setWordToAddOrRemove] = useState("");

    return (
        <div className={styles.root}>
            <input
                className={styles.input}
                aria-label="Set word to add/remove"
                value={wordToAddOrRemove}
                onChange={e => {
                    setWordToAddOrRemove(e.target.value);
                }}
            />
            <div className={styles.buttons}>
                <button
                    className={styles.button}
                    onClick={() => dispatch(addWord(wordToAddOrRemove))}
                >
                    Add Word
                </button>
                <button
                    className={styles.button}
                    onClick={() => dispatch(removeWord(wordToAddOrRemove))}
                >
                    Remove Word
                </button>
                <button
                    className={styles.button}
                    onClick={() => dispatch(clearWords())}
                >
                    Clear Words
                </button>
            </div>
            <div className={styles.displays}>
                <Display values={words} heading="Unsorted :("/>
                <Display values={sortedWords} heading="Sorted :)"/>
            </div>
        </div>
    );
}