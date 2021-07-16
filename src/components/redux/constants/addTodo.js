import { todoTypes } from './actionTypes';

export const actionCreatores = {
    addTodo: (add) => ({ type: todoTypes.ADD, payload: add }),
    deleteTodo: (deleteTodo) => ({ type: todoTypes.DELETE, payload: deleteTodo }),
    editTodo: (editTodo) => ({ type: todoTypes.EDIT, payload: editTodo })
}
