import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { uiColumnActions } from "../../../store/slices/uiColumn";

const Container = styled.div`
  textarea {
    width: 250px;
    height: 40px;
    display: flex;
    justify-content: flex-start;
    outline: none;
    background-color: rgb(240, 255, 255);
    color: rgb(0, 33, 71);
    border-radius: 6px;
    font-size: 14px;
  }
  .addCart {
    cursor: pointer;
    color: red;
    :hover {
      background-color: rgb(203, 194, 184);
    }
  }

  .x {
    color: black;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    margin-left: 20px;
    margin-top: 15px;
    &:hover,
    &:focus,
    &:active {
      color: rgb(0, 121, 191);
    }
  }
`;
const Button = styled.button`
  width: 140px;
  display: inline;
  height: 50px;
  border-radius: 6px;
  color: white;
  background-color: rgb(0, 121, 191);
  outline: none;
  border: none;
  margin-top: 10px;
`;

const TodoHeader = ({ todo }) => {
  const [data, setData] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const textAreaChangeHandler = (e) => {
    setData(e.target.value);
  };
  const addTodoHandler = (e, id) => {
    console.log(data + "todoHeader");
    if (data.trim().length > 0) {
      const todoData = {
        item: data,
        id: new Date(),
      };
      dispatch(uiColumnActions.addTodo({ todoData, id }));
    }
    setData("");
  };
  return show ? (
    <Container>
      <textarea
        name="items"
        value={data}
        onChange={textAreaChangeHandler}
        placeholder="todo title"
      ></textarea>
      <div style={{ display: "flex" }}>
        <Button onClick={(e) => addTodoHandler(e, todo.id)}>Add Task</Button>
        <span className="x" onClick={() => setShow(false)}>
          X
        </span>
      </div>
    </Container>
  ) : (
    <span className="addCart" onClick={() => setShow(true)}>
      + Add сart
    </span>
  );
};
export default TodoHeader;
