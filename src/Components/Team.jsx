import React, {Component} from 'react';
import { shuffle } from "../Data/shuffle";

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
		const array2 = shuffle(this.state.array)
		return (
			<React.Fragment>
				<button onClick={ this.handleClicked }>Create Your Teams</button>
				{array2.length > 10 ? 
				<ul>
					{array2.map((player, index) => { 
						return <li key={player.id}>{player.name}</li>
					})}
				</ul>
				:
				<p>Not enough Players</p>
				}
			</React.Fragment>
		)
	}
}
export default Team;