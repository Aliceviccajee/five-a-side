import players from "../Components/players";
import { connect } from "react-redux";
import { addPlayer } from "../Data/action";
import { removePlayer } from "../Data/action";
import { editPlayer } from "../Data/action";

const mapStateToProps = state => {
	return { 
	players: state.players,
	}
}

const mapsDispatchToProps = (dispatch, { players }) => {

	return {
		onSubmit: (data) => dispatch(addPlayer(data)),
		onUpdate: (id) => dispatch(editPlayer(id)),
		onDelete: (id) => dispatch(removePlayer(id)),
	}
}

export default connect(mapStateToProps,mapsDispatchToProps)(players);