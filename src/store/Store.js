class Store {
	#state = null
	#initialState = null

	constructor(initialState) {
		this.#state = initialState
		this.#initialState = initialState
	}

	get state() {
		return this.#state
	}

	set state(state) {
		this.#state.push(state)
	}

	clear() {
		this.#state = this.#initialState
	}
}

export default Store