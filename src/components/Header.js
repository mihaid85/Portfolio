import React from "react";
import styles from "../styles/components/_header.scss";


export default class Header extends React.Component {

    state ={
        width: 0,
        visibility: 'hidden'
    };

    burgerToggle = () => {
        let linksEl = document.querySelector('.narrowLinks');
        if (linksEl.style.display === 'block') {
                  linksEl.style.display = 'none';
              } else {
                  linksEl.style.display = 'block';
              }
      }


    render(){
        return (
            <nav>
                <div className={styles.header}>
                    <div className={styles.logoContainer}>
                        {/* <div className={styles.logo} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>M<span className={styles.hiddenLogo} style={{width: this.state.width, visibility: this.state.visibility}}>ihai&nbsp;</span>D<span className={styles.hiddenLogo} style={{width: this.state.width, visibility: this.state.visibility}}>anet</span></div> */}
                        <div className={styles.logo}>MD</div>   
                    </div>
                    {/* <div className={styles.navWide}>
                        <div className={styles.wideDiv}>
                            <a href="#">Portfolio</a>
                            <a href="#">About</a>
                            <a href="#">Contact</a>
                            </div>
                        </div>
                        <div className={styles.navNarrow}>
                        <i className="fa fa-bars fa-2x"></i>
                            <div className={styles.narrowLinks}>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                    </div> */}
                    {/* <div className="navWide">
                        <div className="wideDiv">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                            </div>
                        </div>
                        <div className="navNarrow">
                        <i className="fa fa-bars fa-2x"></i>
                            <div className="narrowLinks">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                    </div> */}
                </div>
                <div className={styles.navbar}>
                    <a href="#">Home</a>
                    <a href="#">Work</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
            </nav>
        );
    }
}
