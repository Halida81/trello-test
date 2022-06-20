import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import styled from "styled-components";
import TodoCard from "./TodoCart";
import TodoHeader from "./TodoHeader";

const Container = styled.div`
  width: 240px;
  background-color: rgb(235, 236, 240);
  margin: 50px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  opacity: 0.9;
  p {
    color: red;
    font-weight: bold;
    margin-right: 120px;
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const TodoList = (props) => {
  const { items } = useSelector((state) => state.column);

 
  return (
    <Div>
      {items.map((el) => {
        return (
          <Container key={el.id}>
            <p>{el.title}</p>
            <TodoCard todos={el.todos} />
            <TodoHeader todo={el} />
          </Container>
        );
      })}
    </Div>
  );
};
