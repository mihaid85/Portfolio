import React from "react";
import styles from "../styles/components/_home.scss";

const Home = (props) => {
    return (
        <div className={styles.intro}>
            <div className={styles.profilePic}>
                <img src="./images/me.jpg" alt="me" />
            </div>
            <div className={styles.introAbout}>
                <div className={styles.introText}>
                    Hello! I'm Mihai. A web developer. <br /> I build modern web apps. This is me.
                </div>
                
                <img className={styles.arrow} src="./images/arrow.png" alt="<-" />
            </div>
        </div>
    );
}

export default Home;