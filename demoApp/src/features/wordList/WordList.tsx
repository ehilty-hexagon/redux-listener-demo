import { memo, useState } from "react";
import { Display } from "./Display";
import styles from "./WordList.module.css";

export interface WordListProps {
    words: string[];
    sortedWords: string[];
    onAddWord: (word: string) => void;
    onRemoveWord: (word: string) => void;
    onClearWords: () => void;
}

/**
 * Attemps to be a "stateless component", or more accurately, a component with minimal state.
 * As a stateless component, we prefer communicating solely with props/callbacks
 * This makes the component "agnostic" to how state is actually stored/managed.
 * Component could just as easily be connected to local state as it could be connected to a store.
 */
export const WordList = memo(({ words, sortedWords, onAddWord, onRemoveWord, onClearWords }: WordListProps) => {
    
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
            <div className={styles.displays}>
                <Display values={words} heading="Unsorted :("/>
                <Display values={sortedWords} heading="Sorted :)"/>
            </div>
        </div>
    );
});