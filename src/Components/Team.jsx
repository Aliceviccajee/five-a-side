import React, {Component} from 'react';

class Team extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			teams: [this.state.players],
		};
	

	render() {
		return (
			<React.Fragment>
				<p>Team 1</p>
			</React.Fragment>
		)
	
}
export default Team;