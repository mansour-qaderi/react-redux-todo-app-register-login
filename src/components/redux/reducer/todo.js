import { todoTypes } from '../constants/actionTypes';



const initialStateTodo = []

export const actions = ((state = initialStateTodo, action) => {
    switch (action.type) {
        case todoTypes.ADD:
            console.log('add todo', action.payload)
            return state.concat(action.payload)

        case todoTypes.DELETE:
            console.log('delete todo', action.payload)
            return state.filter((item) => item.id !== action.payload)

        case todoTypes.EDIT:
            console.log('update todo', action.payload)
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...state,
                        item: action.payload.item
                    }
                }
            })
        default:
            return state
    }
})
