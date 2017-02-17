//dummy.j
const dummy = (state = [], action) => {
	console.log("dummy reducer, action: ", action)
	console.log("dummy reducer, state: ", state)
	return state
}



export default dummy