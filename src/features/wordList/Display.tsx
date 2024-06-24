import styles from "./Display.module.css";

export const Display = ({ values, heading }: { values: any[], heading: any }) => {
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
}