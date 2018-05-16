import React from "react";
import ReactTooltip from 'react-tooltip';
import styles from "../styles/components/_icon.scss";

export default class Icon extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            iconColor: this.props.color,
            iconClass: this.props.icon,
            hoverState: false,
            title: this.props.title
        }
    }

    hoverHandler = () => {
        this.state.hoverState ? this.setState({ iconColor: 'grey', hoverState: false }) : this.setState({ iconColor: 'blue', hoverState: true });
    }

    render(){
        return (
            <div className={styles.iconContainer}>
                <i data-tip data-for={this.state.title} className={this.state.iconClass} style={{color: this.state.iconColor}} onMouseEnter={this.hoverHandler} onMouseLeave={this.hoverHandler}></i>
                <ReactTooltip id={this.state.title} place="bottom" type="info" effect="float">
                    <span>{this.props.title}</span>
                </ReactTooltip>
            </div>
        );
    }
}

