import React from "react";
import Header from './Header';
import Home from './Home';
// import styles from "../styles/components/_quizContainer.scss";

export default class Portfolio extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Home />
            </div>
        );
    }
}