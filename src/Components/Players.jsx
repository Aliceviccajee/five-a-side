import React, {Component} from 'react';
//import Team from "./Team";


class Players extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			value: ''
		};

		this.update = this.update.bind(this);
		this.handleClicked = this.handleClicked.bind(this);

	}

	update(e) {
		this.setState({ value: e.target.value });
	}

	handleClicked(e) {
		e.preventDefault()
		{this.state.value.length < 1 ? null :
		this.props.onSubmit(this.state.value);
		this.setState({ 
			value: ''
		})	
		}
	}

	render() {
		return (
			<React.Fragment>
				<form onSubmit = { this.handleClicked }>
					<input onChange={ this.update } value={ this.state.value }/>
					<button>Add A Player</button>
				</form>
				<ul>
					{this.props.players.map((player , index) => { 
						return <li key={player.id}>{player.name}</li>
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





