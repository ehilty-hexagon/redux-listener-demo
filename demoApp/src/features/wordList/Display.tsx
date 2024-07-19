import { memo } from "react";
import styles from "./Display.module.css";
import { selectWords, selectWordsSorted, useSliceSelector as useWordListSelector } from "wordlist-state";

export interface DisplayProps {
    values: any[];
    heading: any;
}

export const Display = memo(({ values, heading }: DisplayProps) => {
    if (values.length === 0) return <></>;
    return (
        <div className={styles.root}>
            <h3 className={styles.heading}>{heading}</h3>
            <ul className={styles.values}>
                {values.map((value, index) => (
                    <li className={styles.value} key={index}>
                        {value}
                    </li>
                ))}
            </ul>
        </div>
    );
});

export const ConnectedDisplay = memo(({ sorted = false, heading }: { sorted?: boolean, heading: DisplayProps["heading"] }) => {
    const words = useWordListSelector(sorted ? selectWordsSorted : selectWords);
    return <Display values={words} heading={heading} />;
});