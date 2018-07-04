import players from "../Components/players";
import { connect } from "react-redux";
import { addPlayer } from "../Data/action";

const mapStateToProps = state => {
	return { 
	players: state.players,
	}
}

const mapsDispatchToProps = dispatch => {
	return {
		onSubmit: (data) => dispatch(addPlayer(data))
	}
}

export default connect(mapStateToProps,mapsDispatchToProps)(players);