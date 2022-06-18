import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../../store/slices/uiLoginSlice";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 43px;
    margin-bottom: 40px;
  }

  form {
    width: 300px;
    height: 300px;
    background-color: darkslategrey;
    border-radius: 6px;
    padding: 25px 40px;
    box-shadow: black;
    max-width: 585px;
  }
  input {
    background-color: white;
    border-color: gray;
    font-size: 14px;
    height: 40px;
    width: 80%;
    margin-top: 20px;
    border-radius: 3px;
  }
  input:active,
  input:hover,
  input:focus {
    border-color: blue;
  }

  button {
    font-size: 16px;
    height: 40px;
    width: 80%;
    background-color: green;
    border: none;
    margin-top: 20px;
    border-radius: 6px;
    color: white;
  }
  button:disabled,
  button:disabled:hover,
  button:disabled:active,
  button:disabled:active {
    background-color: rgb(200, 200, 200);
    color: rgb(35, 35, 37);
    cursor: not-allowed;
  }

  h3 {
    font-size: 16px;
    color: rgb 86, 83, 83;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;

const SignIn = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const linkRef = useRef();

  const dispatch = useDispatch();

  const userData = useSelector((state) => state.cart);
  const [formIsValid, setFormIsValid] = useState(false);

  let idUser = 0;

  const inputChangelHandler = (e) => {
    const value = e.target.value;

    setData({
      ...data,
      id: idUser++,
      [e.target.name]: value,
    });
  };

  useEffect(() => {
    if (userData.email === data.email && userData.password === data.password) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [data]);

  // console.log(data);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(uiActions.addUser(data));
    linkRef.current.click();

    setData({
      email: "",
      password: "",
    });
  };

  return (
    <Container>
      <img
        alt="Trello"
        src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg"
      ></img>
      <form onSubmit={submitHandler}>
        <div>
          <h3>Sign in  Trello</h3>
          <div>
            <label htmlFor="email"></label>
            <input
              id="email"
              type="email"
              value={data.email}
              name="email"
              placeholder="Укажите адрес электронной почты"
              onChange={inputChangelHandler}
            />
          </div>
          <div>
            <label htmlFor="password"></label>
            <input
              id="password"
              type="password"
              value={data.password}
              name="password"
              placeholder="Введите пароль"
              onChange={inputChangelHandler}
            />
          </div>
          <Link ref={linkRef} to="/todo"></Link>
          <button 
          // disabled={!formIsValid}
          >Login</button>
        </div>
      </form>
    </Container>
  );
};
export default SignIn;
