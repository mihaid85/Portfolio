import React from "react";
import WorkItem from './WorkItem';
import styles from "../styles/components/_work.scss";

const Work = (props) => {
    return (
        <div>
            <h3>Recent Work:</h3>
            <div className={styles.workContainer}>
                <WorkItem title={'teodorescu'} source={'./images/teodorescu.png'} />
                <WorkItem title={'calculator'} source={'./images/calculator.png'} />
                <WorkItem title={'indecision app'} source={'./images/indecision-app.png'} />
                <WorkItem title={'secret santa'} source={'./images/secret-santa.png'} />
                <WorkItem title={'sefu nu inteleg'} source={'./images/sefu-nu-inteleg.png'} />
            </div>
        </div>
    );
}

export default Work;