import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shortid from "shortid";
import { addTodo } from '../redux/modules/todos';

function Form() {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const onChangeTitleHandler = (e) => {
        {setTitle(e.target.value)}
    }

    const onChangebodyHandler = (e) => {
        {setBody(e.target.value)}
    }

    const onSubmitHandler = (e)=> {
        e.preventDefault();

        // 여기서 추가
        const newTodo = {
            id: shortid.generate(),
            title,
            body,
            isDone: false,
          }
        
        setTitle('');
        setBody('');
        dispatch(addTodo(newTodo));
    }

  return (
    <form onSubmit={onSubmitHandler}>
        <label>제목</label>
        <input type="text" value={title} onChange={onChangeTitleHandler}/>
        <label >내용</label>
        <input type="text" value={body} onChange={onChangebodyHandler} />
        <button type="submit">추가</button>
    </form>
  )
}

export default Form