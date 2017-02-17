//index.js
export const NEW_INPUT = 'NEW_INPUT'

export function newInput(input){
	return { type: NEW_INPUT, input }
}