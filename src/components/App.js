import React from "react";
import Home from './Home';
import About from './About';
import Work from './Work';
import styles from "../styles/components/_portfolio.scss";

export default class App extends React.Component {

    render() {
        return (
            <div>
                {/* <Home /> */}
                {/* <About /> */}
                <Work />
            </div>
        );
    }
}