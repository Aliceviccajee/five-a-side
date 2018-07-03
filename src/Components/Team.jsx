import React, {Component} from 'react';
import Players from "./Players";

class Team extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			array: [],
		};
	
	this.handleClicked = this.handleClicked.bind(this);
	}

	handleClicked() {
		this.setState({ array: this.state.array.concat(this.props.team) });
	}

	render() {
		console.log(this.state.array)
		return (
			<React.Fragment>
				<button onClick={ this.handleClicked }>Create Your Teams</button>
				<ul>
					{this.state.array.map((player, index) => { 
						return <li key={player.id}>{player.name}</li>
					})}
				</ul>
			</React.Fragment>
		)
	}
}
export default Team;