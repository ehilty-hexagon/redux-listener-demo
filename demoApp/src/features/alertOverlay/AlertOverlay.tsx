import { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addWord, clearWords, removeWord } from "wordlist-state";
import { addListener } from "@reduxjs/toolkit";
import styles from "./AlertOverlay.module.css";

interface Alert {
    id: string;
    text: string;
}

export const AlertOverlay = ({ alertTimeout = 2e3 }) => {

    const dispatch = useAppDispatch();
    const [alerts, setAlerts] = useState<Alert[]>([]);

    function removeAlert(id: string) {
        setAlerts(alerts => {
            const newAlerts = [...alerts];
            const index = newAlerts.findIndex(alert => alert.id === id);
            if (index !== -1) {
                newAlerts.splice(index, 1);
            }
            return newAlerts;
        });
    }

    function showAlert(text: string) {
        // Create new ID
        const id = crypto.randomUUID();
        setAlerts(alerts => ([...alerts, { id, text }]))
        setTimeout(() => {
            removeAlert(id);
        }, alertTimeout);
    }

    // Listen to Redux actions
    useEffect(() => {
        const unsubscribe = dispatch(
            addListener({
                actionCreator: addWord,
                effect: (action) => {
                    showAlert(`Added word: "${action.payload}"`);
                },
            })
        );
        return unsubscribe;
    });

    useEffect(() => {
        const unsubscribe = dispatch(
            addListener({
                actionCreator: removeWord,
                effect: (action) => {
                    showAlert(`Removed word: "${action.payload}"`);
                },
            })
        );
        return unsubscribe;
    });

    useEffect(() => {
        const unsubscribe = dispatch(
            addListener({
                actionCreator: clearWords,
                effect: () => {
                    showAlert("Cleared words");
                },
            })
        );
        return unsubscribe;
    });

    return (
        <div className={styles.root}>
            {alerts.map(({ id, text }) => (
                <div className={styles.alert} key={id}>
                    {text}
                </div>
            ))}
        </div>
    );

}