import React from 'react';
import './Reset.css';

class Reset extends React.Component{
    constructor(props){
        super(props);
        this.resetArray = this.resetArray.bind(this);
    }
    resetArray(){
        this.props.newArray();
    }
    render(){
        return(
            <div>
            <button onClick = {this.resetArray} className="reset">Reset</button>
            </div>
            
        );
    }
}
export default Reset;
