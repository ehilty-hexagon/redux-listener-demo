import { memo, useState } from "react";
import styles from "./Controls.module.css";
import { addWord, clearWords, removeWord, useSliceDispatch as useWordListDispatch } from "wordlist-state";

export interface ControlsProps {
    onAddWord: (word: string) => void;
    onRemoveWord: (word: string) => void;
    onClearWords: () => void;
}

/**
 * Attempts to use as minimal state as possible - "stateless component"
 * This makes component agnostic to how state is actually managed.
 * Can just as easily connected to local state of parent as Redux store
 */
export const Controls = memo(({ onAddWord, onRemoveWord, onClearWords }: ControlsProps) => {

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
                    onClick={() => onAddWord(wordToAddOrRemove)}
                >
                    Add Word
                </button>
                <button
                    className={styles.button}
                    onClick={() => onRemoveWord(wordToAddOrRemove)}
                >
                    Remove Word
                </button>
                <button
                    className={styles.button}
                    onClick={() => onClearWords()}
                >
                    Clear Words
                </button>
            </div>
        </div>
    );
    
});

/**
 * A wrapper around Controls which is connected to the store
 */
export const ConnectedControls = () => {
    const dispatch = useWordListDispatch();
    return <Controls
        onAddWord={(word) => dispatch(addWord(word))}
        onRemoveWord={(word) => dispatch(removeWord(word))}
        onClearWords={() => dispatch(clearWords())} />;
}