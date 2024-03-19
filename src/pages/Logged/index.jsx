import { Link } from "react-router-dom";
import { Content, StyleLink } from "../Inicio";
import styled from "styled-components";



export const Logged = () => {
    return(
        <Content>
            <h1 style={{color: "white"}}>Bem Vindo</h1>
            <StyleLink style={{textTransform: "uppercase"}} to="/">Sair</StyleLink>
        </Content>
    )
}