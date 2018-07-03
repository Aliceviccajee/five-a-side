// react redux's connect function
import { connect } from "react-redux";
import { addPlayer } from "../Data/action";
import Players from "../Components/Players";

const mapStateToProps = (state) => {
	return {
		players: state.players
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
	    onSubmit: (data) => dispatch(addPlayer(data)),
  };
};
// connect up mapStateToProps with the Task component
// Tasks' props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(Players);
