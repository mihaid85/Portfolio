import React from "react";
import Icon from './Icon';
import styles from "../styles/components/_home.scss";

const Home = (props) => {
    return (
        <header>
            <div className={styles.introText}>
                <h1>Mihai Danet</h1><h3>Web Developer</h3>
                <div className={styles.icons}>
                    <Icon color={'grey'} icon={'icon_html5'} title={'html5'}/>
                    <Icon color={'grey'} icon={'icon_css3'} />
                    <Icon color={'grey'} icon={'icon_javascript'} />
                    <Icon color={'grey'} icon={'icon_reactjs'} />
                    <Icon color={'grey'} icon={'icon_sass'} />
                    <Icon color={'grey'} icon={'icon_bootstrap'} />
                    <Icon color={'grey'} icon={'icon_php'} />
                    <Icon color={'grey'} icon={'icon_mysql'} />
                    <Icon color={'grey'} icon={'icon_git'} />
                </div>
            </div>
            <div className={styles.downArrow}><img src="/images/down.png" alt="V"/></div>
        </header>
    );
}

export default Home;