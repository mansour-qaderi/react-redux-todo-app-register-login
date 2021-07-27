import { todoTypes } from './actionTypes';

export const actionCreators = {
    addTodo: (add) => ({ type: todoTypes.ADD, payload: { add } }),
    deleteTodo: (deleteTodo) => ({ type: todoTypes.DELETE, payload: deleteTodo }),
    editTodo: (editTodo) => ({ type: todoTypes.EDIT, payload: editTodo }),
    showWithStatus: (currentlyStatus) => ({ type: todoTypes.SHOW_WITH_STATUS, payload: currentlyStatus })
}
