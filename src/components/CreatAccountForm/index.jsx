import styled from "styled-components";
import { Button, LoginForm, LoginFormSection, ViewIcon, PasswordBox } from "../Form";
import { Inputs } from "../Form/Inputs";

const SpanError = styled.span`
  font-size: 12px;
  color: #ff0000;
  word-spacing: 4px;
`;

export const CreatAccountForm = ({
  email,
  name,
  password,
  handleChangeEmail,
  handleChangeName,
  handleChangePassword,
  sent,
  emailValid,
  nameValid,
  passwordValid,
  confirmPassword,
  confirmPasswordValid,
  handleConfirm,
  onView,
  passwordType
}) => {

  const viewIcon = passwordType === "password" ? "/icon/Pictogrammers-Material-Light-Eye.512.png" : "/icon/Pictogrammers-Material-Light-Eye-off.512.png";

  return (
    <LoginFormSection>
      <LoginForm onSubmit={sent}>
        <h2>Crie sua conta</h2>
        <Inputs
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={handleChangeEmail}
          isValid={emailValid}
        />
        {!emailValid && <SpanError>Digite um e-mail válido</SpanError>}
        <Inputs
          placeholder="Crie um nome de usuário"
          type="text"
          value={name}
          onChange={handleChangeName}
          isValid={nameValid}
        />
        {!nameValid && (
          <SpanError>
            Apenas alphanuéricos _ e . Min 5 Max 20 caracteres
          </SpanError>
        )}
        <PasswordBox>
          <Inputs
            placeholder="Crie uma senha"
            type={passwordType}
            value={password}
            onChange={handleChangePassword}
            isValid={passwordValid}
          />
          <ViewIcon onClick={onView} src={viewIcon}/>
        </PasswordBox>
        {!passwordValid && (
          <SpanError>Minimo 8 caracteres, maiusculas, minusculas, caracteres especiais e números</SpanError>
        )}
        <Inputs placeholder="confirme sua senha" type="password"
          value={confirmPassword}
          onChange={handleConfirm}
          isValid={confirmPasswordValid}
        />
        {!confirmPasswordValid && <SpanError>As snehas devem ser iguais</SpanError>}
        <Button>Criar conta</Button>
      </LoginForm>
    </LoginFormSection>
  );
};
