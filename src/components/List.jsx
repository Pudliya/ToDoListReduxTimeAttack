import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../redux/modules/todos';

function List({isDone}) {

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos)
    const onClickBodyDelete = () => {
        dispatch(deleteTodo());
    };

  return (
    <div>
        {isDone === false ? "할일 목록" : "완료목록"}
        {todos.filter(function(item){
            return item.isDone === isDone;
        }).map(function (todo) {
            return (
                <div key={todo.id}>
                <h1>{todo.title}</h1>
                <p>{todo.body}</p>
                <p>{todo.isDone}</p>
                <button>{isDone === false ? "완료" : "취소"}</button>
                <button onClick={onClickBodyDelete}>삭제</button>
            </div>
            );
        })}
    </div>
  )
}

export default List