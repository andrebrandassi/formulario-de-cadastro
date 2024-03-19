# Formulario de login e cadastro Vitelife

Este projeto é um formulário de login e criação de conta desenvolvido como parte do meu portfólio como programador front-end. Ele utiliza tecnologias como React, React Router DOM e styled-components para criar uma interface amigável e responsiva.

## Estrutura de Arquivos

- `src/App.js`: Este arquivo contém a configuração das rotas usando o React Router DOM. Aqui, definimos as rotas para as páginas Início, Logado (Logged) e Criar Conta (Create Account).

- `src/GlobalStyle.js`: Aqui estão as definições globais de estilo para o projeto, como a estilização padrão para elementos HTML, inputs, botões, etc.

- `src/pages/Inicio.js`: Nesta página, temos o formulário de login com validação de nome de usuário e senha. Também há um link para criar uma conta caso o usuário ainda não esteja cadastrado.

- `src/pages/Logged.js`: Esta página é exibida quando o usuário está logado com sucesso, apresentando uma mensagem de boas-vindas e um botão para sair.

- `src/pages/CreatAccount.js`: Aqui temos o formulário de criação de conta, com validações para e-mail, nome de usuário, senha e confirmação de senha.

- `src/components/Form.js` e `src/components/CreatAccountForm.js`: Esses componentes são responsáveis por renderizar os formulários de login e criação de conta, respectivamente. Eles também lidam com a lógica de validação dos campos e o envio dos dados.

- `src/components/Inputs.js`: Este componente encapsula a criação dos inputs dos formulários, utilizando styled-components para estilização e validação de entrada de dados.

## Funcionamento das Tecnologias Utilizadas

### React

O React é uma biblioteca JavaScript de código aberto usada para construir interfaces de usuário (UI). Ele funciona com o conceito de componentes reutilizáveis, permitindo a criação de interfaces dinâmicas e interativas.

No projeto, o React é utilizado para:

- Organizar a aplicação em componentes reutilizáveis, como formulários, páginas e elementos visuais.
- Gerenciar o estado da aplicação usando hooks como useState, permitindo a atualização dinâmica da interface com base nas interações do usuário.
- Utilizar o conceito de rotas com o React Router DOM, facilitando a navegação entre as diferentes páginas da aplicação sem recarregar a página inteira.

### React Router DOM

O React Router DOM é uma extensão do React Router que facilita o roteamento em aplicações React. Ele permite a criação de rotas dentro da aplicação, mapeando URLs para componentes específicos.

No projeto, o React Router DOM é utilizado para:

- Definir e gerenciar as rotas da aplicação, como a rota para a página de início, página logada e página de criação de conta.
- Facilitar a navegação entre as diferentes páginas da aplicação, mantendo o estado da aplicação e melhorando a experiência do usuário.

### styled-components

O styled-components é uma biblioteca popular para estilização de componentes em aplicações React. Ele permite escrever estilos CSS diretamente nos componentes JavaScript, utilizando a sintaxe de template literals.

No projeto, o styled-components é utilizado para:

- Criar estilos dinâmicos e reutilizáveis para os componentes da aplicação, como inputs, botões, containers, entre outros.
- Utilizar recursos avançados, como estilização condicional baseada em props dos componentes, tornando a estilização mais flexível e fácil de gerenciar.
- Manter o escopo dos estilos localizados nos componentes, evitando conflitos e tornando o código mais organizado e legível.

### Validator (validator.js)

O validator.js é uma biblioteca JavaScript usada para validar diferentes tipos de dados, como e-mails, senhas, URLs, entre outros. Ele fornece funções simples e eficientes para validar e manipular dados de forma segura.

No projeto, o validator.js é utilizado para:

- Validar o formato e a força da senha inserida pelos usuários nos formulários de login e criação de conta.
- Verificar a validade do endereço de e-mail fornecido pelos usuários durante o cadastro de conta.
- Garantir que os dados inseridos pelos usuários atendam aos requisitos mínimos de segurança e formatação antes de serem processados pela aplicação.

