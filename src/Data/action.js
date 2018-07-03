
let lastID = 0;

export const addPlayer = name => {
	lastID += 1
	return {
		type: "setPlayer",
		name: name,
		id: lastID,

	};

}

export const createTeam = teams => {
	return {
		type: "setTeam",
		teams: teams,
	}
};
