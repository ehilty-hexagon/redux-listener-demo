// Credit to https://github.com/reduxjs/redux-toolkit/discussions/1845#discussioncomment-1843186

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { WordListState, wordListSlice } from "./wordListSlice";
import { ThunkDispatch, configureStore } from "@reduxjs/toolkit";

// Define root state as including *at least* this slice and any other slices that might be added
type RootStateInterface = { [wordListSlice.name]: WordListState } & Record<string, any>;

// A version of use selector that includes RootStateInterface
export let useSliceSelector: TypedUseSelectorHook<RootStateInterface> = useSelector;

// Used for type inference
// Creates a store which solely contains wordlist reducer
const configureLocalStore = () =>
    configureStore({
        reducer: { [wordListSlice.name]: wordListSlice.reducer },
    });

// Infer type of dispatch from store
type SliceDispatch = ReturnType<typeof configureLocalStore>["dispatch"];

// Define "AppDispatchInterface" which includes add least WordList dispatch and any other dispatches
type AppDispatchInterface = SliceDispatch & ThunkDispatch<any, any, any>;

export let useSliceDispatch = () => useDispatch<AppDispatchInterface>();

// Ensures dependents of this package use the global app store,
// which should implement dispatch and state interface.
// (This will be true assuming root store composed with this slice.)
export const initializeSlicePackage = (
    useAppDispatch: typeof useSliceDispatch,
    useAppSelector: typeof useSliceSelector,
) => {
    useSliceDispatch = useAppDispatch;
    useSliceSelector = useAppSelector;
}