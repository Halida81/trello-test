import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { uiColumnActions } from "../../../store/slices/uiColumn";
import { useState } from "react";

const Container = styled.form`
  display: flex;
  justify-content: space-evenly;
  margin: 50px;
  input {
    width: 273px;
    height: 30px;
    display: flex;
    justify-content: flex-start;
    outline: none;
    background-color: rgb(222, 222, 219);
    color: rgb(0, 33, 71);
    border-radius: 6px;
    font-size: 14px;
  }
`;
const Column = () => {
  const dispatch = useDispatch();

  const addColumnHAndler = () => {
    dispatch(uiColumnActions.isShow());
  };

  return (
    <Container onSubmit={(e) => e.preventDefault()}>
      <div>
        {/* <button onClick={addColumnHAndler}>+ Add another column</button> */}
        <input placeholder="+Add another column" onClick={addColumnHAndler} />
      </div>
    </Container>
  );
};
export default Column;
