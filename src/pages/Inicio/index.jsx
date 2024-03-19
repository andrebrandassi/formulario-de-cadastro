import styled from "styled-components";
import { Form } from "../../components/Form";
import { useState } from "react";
import { isStrongPassword } from "validator";
import { Link, useNavigate } from "react-router-dom";

export const Content = styled.div`
  background: linear-gradient(180deg, rgb(200, 0, 255), rgb(0, 200, 255));
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ToCreateLoggin = styled.h2`
  font-size: 16px;
  color: #fff;
`

export const StyleLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: 400;
  &:hover{
    color: #00ff55;
    font-weight: 800;
  }
`

export const Inicio = () => {

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [nameValid, setNameValid] = useState(true)
  const [passwordValid, setPasswordValid] = useState(true)

  const [passwordType, setPasswordType] = useState("password")

  const handleName = (event) => {
    const {value} = event.target
    setName(value)
    setNameValid(isUserName(value))
  }

  const handlePassword = (event) => {
    const {value} = event.target
    setPassword(value)
    setPasswordValid(isStrongPassword(value))
  }

  const isUserName = (input) => {
    const minLength = 5; // Limite mínimo de caracteres
    const maxLength = 20; // Limite máximo de caracteres

    const regex = /^[a-zA-Z0-9_.]+$/;
    return regex.test(input) && input.length >= minLength && input.length <= maxLength;
  };

  const onView = () => {
    setPasswordType((prevState) =>
      prevState === "password" ? "text" : "password"
    );
  };
  
  function sent(event) {
    event.preventDefault();
    if (nameValid && passwordValid) {
      navigate("/logged");
    } else {
      alert("Usuário não encontrado");
    }
  }

  return (
    <Content>
      <Form name={name} nameValid={nameValid} handleName={handleName} password={password} passwordValid={passwordValid} handlePassword={handlePassword} sent={sent} onView={onView} passwordType={passwordType}/>
      <ToCreateLoggin>Ainda não está cadastrado? <StyleLink to="/createaccount">Criar conta</StyleLink></ToCreateLoggin>
    </Content>
  );
};
