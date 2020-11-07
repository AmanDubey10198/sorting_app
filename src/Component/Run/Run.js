import React from 'react';
import './Run.css';

class Run extends React.Component{
    constructor(props){
        super(props);
        this.run =  this.run.bind(this);
    }
    run(){
        this.props.runSorting();
    }

    render(){
        return(
            <div>
                <button onClick = {this.run} className ="run" name="run">Run</button>
            </div>
        );
    }
}

export default Run;