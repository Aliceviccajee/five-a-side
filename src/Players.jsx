import React, {Component} from 'react';

class Players extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			array: [],
			value: ''
		};

		this.update = this.update.bind(this);
		this.handleClicked = this.handleClicked.bind(this);

	}

	update(e) {
		this.setState({ value: e.target.value });
	}

	handleClicked() {
		this.setState({ 
			array: this.state.array.concat([this.state.value]),
			value: ''
		})
	}

	render() {
		const {list} = this.state
		return (
			<React.Fragment>
				<input onChange={ this.update } value={ this.state.value }/>
				<button onClick={ this.handleClicked }>Add A Player</button>
				<ul>
					{this.state.array.map((string , index) => { 
						return <li key={index}>{string}</li>
					})}
				</ul>
			</React.Fragment>
			)
	}


}
export default Players;




// Create a <List> component that consists of a <ul>, 
// an <input>, and a <button>Add</button>. 
// When you click the "Add" button, whatever is in the 
// <input> should get added to the <ul>.

