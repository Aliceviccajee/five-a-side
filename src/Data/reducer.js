
const setPlayer = (state, { id, name }) => {
	const player = {name: name, id: id}
	return {
			...state,
			players: state.players.concat(player)
		}
}

const setTeams = (state, { id, name }) => {
	const teams = {name: name, id: id}
	return {
		...state,
		teams: state.teams.concat(teams)
	}
}

const removePlayer = (state, { id }) => {
  let players = state.players.slice()
  let newPlayers = players.filter(newPlayers => newPlayers.id !== id)
	return {
    ...state,
    players: newPlayers
  };
};


const reducer = (state, action) => {
    switch (action.type) {
    	case "removePlayer": return removePlayer(state, action);
    	case "setPlayer": return setPlayer(state, action);
    	case "setTeams": return setTeams(state, action);
        default: return state;
    }
}


export default reducer;