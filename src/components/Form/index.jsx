import styled from "styled-components";
import { Inputs } from "./Inputs";

export const LoginFormSection = styled.section`
  width: 100%;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 24px;
  max-width: 400px;
  margin: 0 auto;
  background-color: #ffffff99;
  border-radius: 4px;
  h1,
  h2 {
    text-align: center;
    font-size: 3rem;
    font-family: Pacifico;
  }
`;

export const Button = styled.button`
  width: 100px;
  border-radius: 4px;
  border: transparent;
  padding: 16px;
  margin-top: 40px;
  background-color: #ed00ff;
  color: white;
  cursor: pointer;
  transition: 0.5s ease;
  &:hover {
    background-color: #00ccff;
  }
`;

export const PasswordBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ViewIcon = styled.img`
  width: 25px;
  position: absolute;
  top: 29px;
  right: 20px;
  cursor: pointer;
`;

export const Form = ({
  name,
  nameValid,
  handleName,
  password,
  passwordValid,
  handlePassword,
  sent,
  onView,
  passwordType
}) => {

  const viewIcon = passwordType === "password" ? "/icon/Pictogrammers-Material-Light-Eye.512.png" : "/icon/Pictogrammers-Material-Light-Eye-off.512.png";

  return (
    <LoginFormSection>
      <LoginForm onSubmit={sent}>
        <h1>Vitelife</h1>
        <Inputs
          placeholder="Usuario..."
          type="text"
          value={name}
          onChange={handleName}
          isValid={true}
        />
        {!nameValid && ""}
        <PasswordBox>
          <Inputs
            placeholder="Senha"
            type={passwordType}
            value={password}
            onChange={handlePassword}
            isValid={true}
          />
          <ViewIcon onClick={() => onView()} src={viewIcon}/>
        </PasswordBox>
        {!passwordValid && ""}
        <Button>Entrar</Button>
      </LoginForm>
    </LoginFormSection>
  );
};
