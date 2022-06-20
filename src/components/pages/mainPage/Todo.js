import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { uiColumnActions } from "../../../store/slices/uiColumn";
const Container = styled.form`
  display: flex;
  width: 300px;
  height: 150px;
  align-items: center;
  flex-direction: column;
  margin: 50px;
  background-color: rgb(235, 236, 240);
  padding: 10px;
  border-radius: 6px;

  input {
    width: 273px;
    height: 30px;
    display: flex;
    justify-content: flex-start;
    outline: none;
    background-color: rgb(240, 255, 255);
    color: rgb(0, 33, 71);
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    padding: 10px;
  }

  input:focus,
  input:active,
  input:hover {
    border-color: blue;
  }
  button {
    width: 140px;
    display: inline;
    height: 50px;
    border-radius: 6px;
    color: white;
    background-color: rgb(0, 121, 191);
    outline: none;
    border: none;
    margin-top: 10px;
  }

  span {
    color: black;
    cursor: pointer;
    &:hover,
    &:focus,
    &:active {
      color: rgb(0, 121, 191);
    }
  }
  div {
    display: flex;
    justify-content: space-between;
    width: 250px;
    align-items: center;
  }
`;

const Todo = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    title: "",
  });

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      id: Math.random().toString(),
      title: value,
    });
  };
  const addColumnHandler = () => {
    if (data.title.trim().length === 0) {
      return;
    }
   else{
    dispatch(uiColumnActions.addColumn(data));
    dispatch(uiColumnActions.isShow());
   }
  };

  const toggleHandler = () => {
    dispatch(uiColumnActions.isShow());
  };

  return (
    <div style={{ display: "flex", margin: "auto 0" }}>
      <Container onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="Enter title"
          onChange={inputChangeHandler}
          value={data.title}
          name="title"
        />

        <div>
          <button onClick={addColumnHandler}>Add task</button>
          <span onClick={toggleHandler}>X</span>
        </div>
      </Container>
    </div>
  );
};
export default Todo;
