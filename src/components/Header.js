import React from "react";
import Interactive from 'react-interactive';
import { HamburgerArrow } from 'react-animated-burgers';
import { CSSTransitionGroup } from 'react-transition-group';
import styles from "../styles/components/_header.scss";


export default class Header extends React.Component {
    constructor(){
        super();
        this.state ={
            menuVisible: false,
            displayMenu: 'none',
            isActive: false,
            menuMobileClass: styles.navbarItemsMobileOut
        };

        this.toggleButton = this.toggleButton.bind(this)
    }

    toggleMenu = () => {
        if(this.state.menuVisible){
            this.setState({ menuMobileClass: styles.navbarItemsMobileIn });
            setTimeout(function(){ this.setState({ displayMenu: 'none', menuVisible: false }) }.bind(this), 490);
        }
        else{
            this.setState({ displayMenu: 'inline-flex', menuVisible: true, menuMobileClass: styles.navbarItemsMobileOut });
        }
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
                        normal={{color: 'black', WebkitTransition: 'color 0.6s ease-in', transition: 'color 0.6s ease-in'}}
                        hover={{color: 'blue', WebkitTransition: 'color 0.3s ease-in', transition: 'color 0.3s ease-in'}}
                    >Work</Interactive>
                    <Interactive
                        as="div"
                        normal={{color: 'black', WebkitTransition: 'color 0.6s ease-in', transition: 'color 0.6s ease-in'}}
                        hover={{color: 'blue', WebkitTransition: 'color 0.3s ease-in', transition: 'color 0.3s ease-in'}}
                    >About</Interactive>
                    <Interactive
                        as="div"
                        normal={{color: 'black', WebkitTransition: 'color 0.6s ease-in', transition: 'color 0.6s ease-in'}}
                        hover={{color: 'blue', WebkitTransition: 'color 0.3s ease-in', transition: 'color 0.3s ease-in'}}
                    >Contact</Interactive>
                </nav>
                <nav className={styles.mobileMenuContainer}>
                    <div  className={this.state.menuMobileClass} style={{ display: this.state.displayMenu }}>
                        <Interactive
                            as="div"
                            hover={{textDecoration: 'underline'}}
                        >Work</Interactive>
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
                        <HamburgerArrow isActive={this.state.isActive} toggleButton={this.toggleButton} />
                    </div>
                </nav>
            </div>
        );
    }
}
