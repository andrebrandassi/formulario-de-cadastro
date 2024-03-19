import { useState } from "react";
import { CreatAccountForm } from "../../components/CreatAccountForm";
import { Content } from "../Inicio";
import isEmail from "validator/lib/isEmail";
import { isStrongPassword } from "validator";
import { useNavigate } from "react-router-dom";

export const CreatAccout = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const [emailValid, setEmailValid] = useState(true);
  const [nameValid, setNameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true)
  const [passwordType, setPasswordType] = useState("password")

  const handleChangeEmail = (event) => {
    const { value } = event.target;
    setEmail(value);
    setEmailValid(isEmail(value));
  };

  const handleChangeName = (event) => {
    const { value } = event.target;
    setName(value);
    setNameValid(isUserName(value));
  };

  const handleChangePassword = (event) => {
    const { value } = event.target;
    setPassword(value);
    setPasswordValid(isStrongPassword(value));
  };

  const handleConfirm = (event) => {
    const {value} = event.target
    setConfirmPassword(value)
    setConfirmPasswordValid(value === password)
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
  


  const sent = (event) => {
    event.preventDefault();
    if (emailValid && nameValid && passwordValid && confirmPasswordValid) {
       navigate("/");
      alert(`Conta criada com sucesso! Verifique no console`)
      console.log(`Seu login é username: ${name} e senha: ${password} `)
    } 
    return
  };

  return (
    <Content>
      <CreatAccountForm
        email={email}
        name={name}
        password={password}
        sent={sent}
        handleChangeEmail={handleChangeEmail}
        handleChangeName={handleChangeName}
        handleChangePassword={handleChangePassword}
        emailValid={emailValid}
        nameValid={nameValid}
        passwordValid={passwordValid}
        confirmPassword={confirmPassword}
        confirmPasswordValid={confirmPasswordValid}
        handleConfirm={handleConfirm}
        onView={onView}
        passwordType={passwordType}
      />
    </Content>
  );
};
