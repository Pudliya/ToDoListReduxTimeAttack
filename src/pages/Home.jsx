import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
// import { UseSelector } from "react-redux/es/hooks/useSelector";

const Home = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const TodolistAddHandler = (e) =>
    e.preventDefault();
    // if(!title && !contents){
    //   return alert("제목과 내용을 입력해주세요");
    // }

  // const todos = useSelector((state) => state);

  const onChangeTitle = (e) => {setTitle(e.target.value);}
  const onChangeContents = (e) => {setContents(e.target.value);}
  
  return<Addform onSubmit ={TodolistAddHandler}>
    <label>제목</label>
    <Addinput type="text" value={title} onChange={onChangeTitle}></Addinput>
    <label>내용</label>
    <Addtextarea value={contents} onChange={onChangeContents}></Addtextarea>
    <Addbutton type="submit">추가하기</Addbutton>
  </Addform>;
};

export default Home;

const Addform = styled.div`
  width: 915px;
  margin: 0 auto;
  padding: 10px;
  height: 500px;
  background-color: gray;
`

const Addinput = styled.input`
  margin-top: 5px;
    width: 100%;
    height: 60px;
    resize: none;
`

const Addtextarea = styled.textarea`
  margin-top: 5px;
    width: 100%;
    height: 200px;
    resize: none;
`

const Addbutton = styled.button`
  width: 100px;
  height: 40px;
`