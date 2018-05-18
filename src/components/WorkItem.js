import React from "react";
import styles from "../styles/components/_workItem.scss";


export default class WorkItem extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            
        };
    }

    render(){
        return (
            <div>
                <img className={styles.websitePic} src={this.props.source} alt={this.props.title}/>
            </div>
        );
    }
}
