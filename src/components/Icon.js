import React from "react";
import styles from "../styles/components/_icon.scss";

export default class Icon extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            iconColor: this.props.color,
            iconClass: this.props.icon,
            hoverState: false
        }
    }

    hoverHandler = () => {
        this.state.hoverState ? this.setState({ iconColor: 'grey', hoverState: false }) : this.setState({ iconColor: 'blue', hoverState: true });
    }

    render(){
        return (
            <div className={styles.iconContainer}>
                <i className={this.state.iconClass} style={{color: this.state.iconColor}} onMouseEnter={this.hoverHandler} onMouseLeave={this.hoverHandler} title={this.props.title}></i>
            </div>
        );
    }
}

