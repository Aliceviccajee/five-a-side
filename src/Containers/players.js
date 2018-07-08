import players from "../Components/players";
import { connect } from "react-redux";
import { addPlayer } from "../Data/action";
import { removePlayer } from "../Data/action";

const mapStateToProps = state => {
	return { 
		players: state.players,
	}
}

// We're taking the players array from the global state and assigning it to a 
//players property which will be passed to the players component through maps state to props.


const mapsDispatchToProps = (dispatch, { players }) => {
//onSubmit and on delete dispatch the actions from action.js
	return {
		onSubmit: (data) => dispatch(addPlayer(data)),
		onDelete: (id) => dispatch(removePlayer(id)),
	}
}

export default connect(mapStateToProps,mapsDispatchToProps)(players);

//players props are now controlled by these functions