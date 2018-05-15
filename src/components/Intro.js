import React from "react";
import styles from "../styles/components/_intro.scss";

export default class Intro extends React.Component {

    render() {
        return (
            <div>
                {/* <div className={styles.introText}>&lt;Hello /&gt;<br /><span className={styles.secondRow}>&lt;World! /&gt;</span></div> */}
                <div className={styles.logo}>MD</div>
            </div>
        );
    }
}