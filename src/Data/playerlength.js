
const export playerLength = (state) => {
	
	if (state.players > 10) {
		result.textContent = "Player 1 is the winner!!!"
	
	} else if (state.player2 >= 21) {
		result.textContent = "Player 2 is the winner!!!"
	
	} else {
		result.textContent = "Who is gunna win...."
	}
		return state
}
