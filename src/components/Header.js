import React from "react";
import styles from "../styles/components/_header.scss";


const QuizQuestion = (props) => {
    return (
        <div className={styles.header}>
            <div>
                <h1>M<span>ihai </span>D<span>anet</span></h1>
            </div>
        </div>
    );
}

export default QuizQuestion;