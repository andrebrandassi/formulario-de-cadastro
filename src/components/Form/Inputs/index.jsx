import styled, { css } from "styled-components"

const baseInputStyles = css`
    border-radius: 4px;
    border: 1px solid transparent;
    outline: none;
    padding: 16px;
    margin-top: 16px;
`

const Input = styled.input`
  ${baseInputStyles}
  border-color: ${({ isValid }) => (isValid ? 'transparent' : '#ff0000')};
`;

export const Inputs = ({placeholder, type,value, onChange, isValid}) => {

    return (
        <Input placeholder={placeholder} type={type} required={true}
        value={value} onChange={onChange} isValid={isValid} />
    )
}