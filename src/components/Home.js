import React from "react";
import Icon from './Icon';
import styles from "../styles/components/_home.scss";

const Home = (props) => {
    return (
        <header>
            <div className={styles.introText}>
                <h1>Mihai Danet</h1><h3>Web Developer</h3>
                <div className={styles.icons}>
                    <Icon color={'grey'} icon={'icon_html5'} title={'HTML 5'} />
                    <Icon color={'grey'} icon={'icon_css3'} title={'CSS'} />
                    <Icon color={'grey'} icon={'icon_javascript'} title={'Javascript'} />
                    <Icon color={'grey'} icon={'icon_reactjs'} title={'ReactJS'} />
                    <Icon color={'grey'} icon={'icon_sass'} title={'SASS/SCSS'} />
                    <Icon color={'grey'} icon={'icon_bootstrap'} title={'Bootstrap'} />
                    <Icon color={'grey'} icon={'icon_php'} title={'PHP'} />
                    <Icon color={'grey'} icon={'icon_mysql'} title={'MySQL'} />
                    <Icon color={'grey'} icon={'icon_git'} title={'Git'} />
                </div>
            </div>
            <div className={styles.downArrow}><img src="/images/down.png" alt="V"/></div>
        </header>
    );
}

export default Home;