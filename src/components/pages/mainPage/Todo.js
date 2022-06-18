import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { uiColumnActions } from "../../../store/slices/uiColumn";
import Column from "./Column";
const Container = styled.div`
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
  const items = useSelector((state) => state.column.items);
  const [data, setData] = useState({
    title: "",
  });
  const [show, setShow] = useState(false);

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      id: Math.random().toString(),
      [e.target.name]: value,
    });
  };
  const addDataHandler = () => {
    dispatch(uiColumnActions.addTodo({}));
  };

  const { id } = useSelector((state) => state.column.items);
  const deleteColumnHandler = (id) => {
    dispatch(uiColumnActions.deleteColumn(id));
  };


  return (
    <div style={{ display: "flex", margin: "auto 0" }}>
      {items.map((item) => {
        if (item.title === "todo") {
          return (
            <div key={item.id}>
              <Container>
                <input
                  placeholder="Enter title"
                  onChange={inputChangeHandler}
                  value={data.title}
                  name="title"
                />
                {/* <textarea  placeholder="Ввести заголовок списка" name="title" value={data.title} onChange={inputChangeHandler}></textarea> */}
                <div>
                  <button onClick={addDataHandler}>Add task</button>
                  <span onClick={() => deleteColumnHandler(item.id)}>X</span>
                </div>
              </Container>
            </div>
          );
        } else {
          return <Column />;
        }
      })}
    </div>
  );
};
export default Todo;
