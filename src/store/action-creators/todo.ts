import { Dispatch } from 'redux';
import axios from 'axios';
import { TodoActionType, TodoActions } from '../../types/todo';

export const fetchTodos = (page = 1, limit = 10): any => {
  return async (dispatch: Dispatch<TodoActions>) => {
    try {
      dispatch({ type: TodoActionType.FETCH_TODOS });
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: { _page: page, _limit: limit },
      });
      dispatch({ type: TodoActionType.FETCH_TODOS_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({
        type: TodoActionType.FETCH_TODOS_ERROR,
        payload: 'Произошла ошибка при загрузке пользователей',
      });
    }
  };
};

export function setTodoPage(page: number): TodoActions {
  return { type: TodoActionType.SET_TODO_PAGE, payload: page };
}
