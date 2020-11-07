import React from 'react';
import './Box.css';

function generateRandomColor(val)
{
    var randomColor = '#'+Math.floor(16777215/val).toString(16);
    return randomColor;
    //random color will be freshly served
}
class Box extends React.Component {
	
	render(){
		return (
			<div className="Box" style={{height: this.props.value*25 + 'px', background: generateRandomColor(this.props.value)}}>
			</div>
		);
	}
}

export default Box;