//import React from "react";
//import Players from "../Components/Players";
import Team from "../Components/Team";
import { connect } from "react-redux";

const mapStateToProps = state => {
	return {
		team: state.players,
	}
}

export default connect(mapStateToProps)(Team);