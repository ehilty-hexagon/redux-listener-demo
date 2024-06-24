import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addWord, clearWords, removeWord, selectWords, selectWordsSorted } from "./wordListSlice";
import styles from "./WordList.module.css";
import { Display } from "./Display";

export const WordList = () => {
    
    const dispatch = useAppDispatch();
    const words = useAppSelector(selectWords);
    const sortedWords = useAppSelector(selectWordsSorted);
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