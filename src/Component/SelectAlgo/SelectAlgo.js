import React from 'react';

class SelectAlgo extends React.Component {
	constructor(props){
		super(props);
		this.setAlgo = this.setAlgo.bind(this);
	}
	setAlgo(e){
		this.props.setAlgo(e.target.value);
	}
	render(){
		return(
			<select onClick = {this.setAlgo} id = "algorithm">
				<option>Bubble Sort</option>
				<option>Insertion Sort</option>
				<option>Selection Sort</option>
				<option>Quick Sort</option>
			</select>
		);
	}
}

export default SelectAlgo;