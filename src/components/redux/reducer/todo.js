import { todoTypes } from '../constants/actionTypes';


const initialStateTodo = []

export const actions = ((state = initialStateTodo, action) => {
    switch (action.type) {
        case todoTypes.ADD:
            console.log('add todo', action.payload)
            return state.concat(action.payload)

        case todoTypes.DELETE:
            console.log('delete todo', action.payload)
            return state.filter((item) => item.id !== action.payload.id)

        case todoTypes.EDIT:
            console.log('update todo', action.payload)

            const { id, status, newItem } = action.payload;

            const newState = state?.map((item) => {
                if (item?.id === id) {
                    return {
                        ...item,
                        item: newItem,
                        status: status
                    }
                } else return item
            })

            return state = [...newState]

        default:
            return state
    }
})
