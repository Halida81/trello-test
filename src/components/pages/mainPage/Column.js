import styled from "styled-components";
import { useDispatch } from "react-redux";
import { uiColumnActions } from "../../../store/slices/uiColumn";

const Container = styled.form`
  display: flex;
  margin: 50px;
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
  }
`;
const Column = () => {
  const dispatch = useDispatch();

  // const toggleHandler = () => {
  //   dispatch(uiColumnActions.isShow());
  // };

  const addTodoHandler = () => {
    dispatch(
      uiColumnActions.addColumn({
        todo: {
          id: new Date(),
          title: "todo",
          list: [],
        },
        hello: {
          title: "hello",
        },
      })
    );
  };

  return (
    <Container>
      <div>
        <button onClick={addTodoHandler}>
          <p> + Add another column</p>
        </button>
      </div>
    </Container>
  );
};
export default Column;
