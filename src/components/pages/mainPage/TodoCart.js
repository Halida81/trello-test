import { useState } from "react";
import styled from "styled-components";
import { ModalWindow } from "../../UI/ModalWindow";
const TextStyled = styled.li`
  background-color: white;
  width: 250px;
  height: 40px;
  text-align: start;
  margin: 10px;
  border-radius: 5px;
  list-style: none;

  color: gray;
  :hover {
    background-color: rgb(203, 194, 184);
    opacity: 0.8;
  }
`;
const TodoCard = (props) => {
  const [modalDescription, setModalDescription] = useState(false);
  const modalHandler = () => {
    setModalDescription(true);
  };
  const modalHide = () => {
    setModalDescription(false);
  };
  console.log(props);
  return (
    <div>
      {props.todos.map((el) => (
        <div key={Math.random.toString()}>
          <TextStyled onClick={modalHandler} key={el.todo.id}>
            {el.todo.item}
          </TextStyled>
          {modalDescription && (
            <ModalWindow title={el.todo.item} onHideModal={modalHide} />
          )}
        </div>
      ))}
    </div>
  );
};
export default TodoCard;
