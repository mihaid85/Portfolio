import React from "react";
import Interactive from 'react-interactive';
import {HamburgerSpring} from 'react-animated-burgers'
import styles from "../styles/components/_header.scss";


export default class Header extends React.Component {
    constructor(){
        super();
        this.state ={
            menuVisible: false,
            displayMenu: 'none',
            isActive: false
        };

        this.toggleButton = this.toggleButton.bind(this)
    }

    toggleMenu = () => {
        this.state.menuVisible ? this.setState({ displayMenu: 'none', menuVisible: false }) : this.setState({ displayMenu: 'inline-flex', menuVisible: true });
    }

    toggleButton() {
        this.setState({
          isActive: !this.state.isActive
        })
        this.toggleMenu();
      }

    render(){
        return (
            <div className={styles.navbar}>
                <nav className={styles.navbarItems}>
                    <Interactive
                        as="div"
                        normal={{color: 'black', WebkitTransition: 'color 1s ease-in', transition: 'color 1s ease-in'}}
                        hover={{color: 'blue', WebkitTransition: 'color 0.5s ease-in', transition: 'color 0.5s ease-in'}}
                    >Portfolio</Interactive>
                    <Interactive
                        as="div"
                        normal={{color: 'black', WebkitTransition: 'color 1s ease-in', transition: 'color 1s ease-in'}}
                        hover={{color: 'blue', WebkitTransition: 'color 0.5s ease-in', transition: 'color 0.5s ease-in'}}
                    >About</Interactive>
                    <Interactive
                        as="div"
                        hnormal={{color: 'black', WebkitTransition: 'color 1s ease-in', transition: 'color 1s ease-in'}}
                        hover={{color: 'blue', WebkitTransition: 'color 0.5s ease-in', transition: 'color 0.5s ease-in'}}
                    >Contact</Interactive>
                </nav>
                <nav className={styles.mobileMenuContainer}>
                    <div  className={styles.navbarItemsMobile} style={{ display: this.state.displayMenu }}>
                        <Interactive
                            as="div"
                            hover={{textDecoration: 'underline'}}
                        >Portfolio</Interactive>
                        <Interactive
                            as="div"
                            hover={{textDecoration: 'underline'}}
                        >About</Interactive>
                        <Interactive
                            as="div"
                            hover={{textDecoration: 'underline'}}
                        >Contact</Interactive>
                    </div>
                    <div className={styles.menuButton} onClick={this.toggleMenu}>
                        {/* <FontAwesome
                            className="bars"
                            name="bars"
                            size="2x"
                        /> */}
                        <HamburgerSpring isActive={this.state.isActive} toggleButton={this.toggleButton} />
                    </div>
                </nav>
                
            </div>
        );
    }
}
