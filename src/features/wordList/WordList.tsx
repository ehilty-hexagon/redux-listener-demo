import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addWord, clearWords, removeWord, selectWords } from "./wordListSlice";
import styles from "./WordList.module.css";

export const WordList = () => {
    
    const dispatch = useAppDispatch();
    const word = useAppSelector(selectWords);
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
                    Add Value
                </button>
                <button
                    className={styles.button}
                    onClick={() => dispatch(removeWord(wordToAddOrRemove))}
                >
                    Remove Value
                </button>
                <button
                    className={styles.button}
                    onClick={() => dispatch(clearWords())}
                >
                    Clear Values
                </button>
            </div>
            <ul className={styles.values}>
                {word.map(value => (
                    <li className={styles.value}>
                        {value}
                    </li>
                ))}
            </ul>
        </div>
    );
}