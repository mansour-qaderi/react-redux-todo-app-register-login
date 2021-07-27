import { todoTypes } from '../constants/actionTypes';


const initialStateTodo = {
    todos: [],
    showTodosWithStatus: 'all'
}

export const actions = ((state = initialStateTodo, action) => {
    switch (action.type) {
        case todoTypes.ADD:
            console.log('add todo', action.payload.add)
            return {
                ...state,
                todos: state.todos.concat(action.payload.add),
            }

        case todoTypes.DELETE:
            console.log('delete todo', action.payload)

            return {
                ...state,
                todos: state.todos.filter((item) => item.id !== action.payload.id)
            }

        case todoTypes.EDIT:
            console.log('update todo', action.payload)

            const { id, status, newItem } = action.payload;

            const newState = state.todos.map((item) => {
                if (item?.id === id) {
                    return {
                        ...item,
                        item: newItem,
                        status: status
                    }
                } else return item
            })

            return {
                ...state,
                todos: [...newState]
            }

        case todoTypes.SHOW_WITH_STATUS:
            console.log('choice status todo', action.payload)

            return {
                ...state,
                showTodosWithStatus: action.payload.status
            }

        default:
            return state
    }
})
