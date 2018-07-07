let lastID = 0;

export const addPlayer = name => {
	lastID += 1
	return {
		type: "setPlayer",
		name: name,
		id: lastID,

	};
}

export const removePlayer = (id) => {
	return {
		type: "removePlayer",
		id: id,
	}
}

