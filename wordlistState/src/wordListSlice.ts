import { type PayloadAction, createSlice, createSelector } from "@reduxjs/toolkit";

export type Word = string;

export interface WordListState {
    values: Word[]
}

const initialState: WordListState = {
    values: []
};

export const wordListSlice = createSlice({
    name: "wordList",
    initialState,
    reducers: create => ({
        addWord: create.reducer(
            ({ values }, action: PayloadAction<Word>) => {
                values.push(action.payload);
            }
        ),
        removeWord: create.reducer(
            ({ values }, action: PayloadAction<Word>) => {
                const index = values.indexOf(action.payload);
                if (index !== -1) {
                    values.splice(index, 1);
                }
            }
        ),
        clearWords: create.reducer(
            (state) => {
                state.values = [];
            }
        )
    }),
    selectors: {
        selectWords: wordList => wordList.values,
        selectWordsSorted: createSelector((wordList) => wordList.values, (words) => words.toSorted()),
    },
    
});

export const { addWord, removeWord, clearWords } = wordListSlice.actions;

export const { selectWords, selectWordsSorted } = wordListSlice.selectors;