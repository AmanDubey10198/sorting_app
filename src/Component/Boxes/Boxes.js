import React from 'react';
import './Boxes.css';
import Box from '../Box/Box';

class Boxes extends React.Component{

    render(){
        // create a random array 
        let arr = this.props.array;
        return (
            <div className="Boxes">
                {arr.map(ele => {
                    return <Box value={ele} />;
                })}
            </div>
        );
    }
}

export default Boxes;