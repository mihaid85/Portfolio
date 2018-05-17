import React from "react";
import Home from './Home';
import About from './About';
import styles from "../styles/components/_portfolio.scss";

export default class Portfolio extends React.Component {

    render() {
        return (
            <div>
                <Home />
                {/* <About /> */}
            </div>
        );
    }
}