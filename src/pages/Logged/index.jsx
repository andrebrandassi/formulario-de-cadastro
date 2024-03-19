import { Content, StyleLink } from "../Inicio";

export const Logged = () => {
    return(
        <Content>
            <h1 style={{color: "white"}}>Bem Vindo</h1>
            <StyleLink style={{textTransform: "uppercase"}} to="/">Sair</StyleLink>
        </Content>
    )
}
