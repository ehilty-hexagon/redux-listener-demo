import { combineSlices, configureStore } from "@reduxjs/toolkit";
import {
    wordListSlice,
    addWord,
    removeWord,
    clearWords,
    selectWords,
    WordListState,
} from "./wordListSlice";

type RootState = { [wordListSlice.name]: WordListState };

function makeStore(preloadedState?: Partial<RootState>) {
    return configureStore({
        reducer: combineSlices(wordListSlice),
        preloadedState,
    });
}

describe("wordList reducer", () => {

    it("should add word", () => {
        const store = makeStore({ wordList: { values: [] }});
        store.dispatch(addWord("some word"));
        expect(selectWords(store.getState())).toIncludeSameMembers(["some word"]);
    });

    it("should remove word", () => {
        const store = makeStore({ wordList: { values: ["steve", "earl"]}});
        store.dispatch(removeWord("steve"));
        expect(selectWords(store.getState())).toIncludeSameMembers(["earl"]);
    });

    it("should preserve words if removing word not present", () => {
        const store = makeStore({ wordList: { values: ["some word"]}});
        store.dispatch(removeWord("some other word"));
        expect(selectWords(store.getState())).toIncludeSameMembers(["some word"]);
    });

    it("should clear words", () => {
        const store = makeStore({ wordList: { values: ["janet", "bob"]}});
        store.dispatch(clearWords());
        expect(selectWords(store.getState())).toIncludeSameMembers([]);
    });

});