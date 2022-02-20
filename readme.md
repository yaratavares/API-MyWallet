# My Wallet

<p align="center">
<a href="https://wakatime.com/badge/user/97595b44-027b-4695-a588-53e9c884f7e2/project/31e8c4d6-5bf3-4c6b-98a8-25c05e137d03"><img src="https://wakatime.com/badge/user/97595b44-027b-4695-a588-53e9c884f7e2/project/31e8c4d6-5bf3-4c6b-98a8-25c05e137d03.svg" alt="wakatime"></a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/yaratavares/API-MyWallet">
  <a href="https://github.com/yaratavares/API-MyWallet/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/yaratavares/API-MyWallet">
  </a>
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen"></p>

<p align="center">
 <a href="#-sobre-o-projeto">Projeto</a> •
 <a href="#-funcionalidades">Funcionalidades</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-autor">Autora</a> • 
 <a href="#user-content--licença">Licença</a>
</p>

## 💻 Projeto

My Wallet é sua carteira virtual, nela você poderá inserir as entradas e saídas da sua carteira real de forma rápida e prática! Após inserir um registro poderá excluir ou editar como preferir.

Se trata de meu primeiro projeto Full-Stack, onde desenvolvi o front-end e back-end em conjunto com o banco de dados.

---

## ⚙️ Funcionalidades

- [x] O servidor da aplicação my wallet, valida envios de registro, login e cadastro.
- [x] A cada login é gerado um token único que identifica o usuário em uma coleção do banco de dados.
- [x] A cada cadastro os dados sensíveis são criptografados e enviados para o banco de dados.
- [x] Para o usuário conseguir excluir e editar um registro é necessário enviar o token válido.

---

## 🚀 Como executar o projeto

Este projeto está dividido em duas partes:

1. Backend (este repositório)
2. [Frontend](https://github.com/yaratavares/MyWallet) 🧭

💡 O front-end não precisa que o back-end esteja rodando para funcionamento da aplicação.

### Pré-requisitos

Para rodar a aplicação na sua máquina, você vai precisar ter instalado as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

#### Rodando a aplicação web (Front-end)

```bash
# Clone este repositório
$ git clone git@github.com:yaratavares/API-MyWallet.git
# Acesse a pasta do projeto no terminal/cmd e instale as dependências
$ npm insall
# Será necessário criar uma pasta .env
MONGO_URI=http://localhost:4000
MONGO_NAME=my_wallet
PORT=4000
# Necessário que o terminal rode o código durante o funcionamento do servidor
$ mongod --dbpath ~/.mongo
# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# O servidor iniciará na porta:4000 - acesse http://localhost:4000
```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

### Front-end

<p >
<a src="https://reactjs.org/">
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="badge react"/> </a><a src="https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom"><img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/></a> <a src="https://styled-components.com/"><img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/></a>
<a src="https://axios-http.com/"><img src="https://img.shields.io/badge/Axios-6F63E7?style=for-the-badge"/></a> <a src="https://mhnpd.github.io/react-loader-spinner/"><img src="https://img.shields.io/badge/React Loader Spinner-000000?style=for-the-badge"/></a> <a src="https://react-hot-toast.com/"><img src="https://img.shields.io/badge/React Hot Toast-482307?style=for-the-badge"/></a> 
<a src="https://reactjs.org/">
<img src="https://img.shields.io/badge/React Icons-F4F5F7?style=for-the-badge&logo=react&logoColor=EA4B64" alt="badge react"/> </a>
</p>

> Veja o arquivo [package.json](https://github.com/yaratavares/MyWallet/blob/main/package.json)

### Back-end

<p>
<a src="https://nodejs.org/en/"><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /></a>
<a src="https://expressjs.com/pt-br/"><img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/></a>
<a src="https://www.mongodb.com/"><img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/></a>
<a src="https://https://day.js.org/"><img src="https://img.shields.io/badge/Day.js-F35C4B?style=for-the-badge"/></a>
<a src="https://joi.dev/"><img src="https://img.shields.io/badge/joi-0A7EFA?style=for-the-badge"/></a>
<a src="https://github.com/expressjs/cors"><img src="https://img.shields.io/badge/cors-000000?style=for-the-badge"/></a>
<a src="https://github.com/motdotla/dotenv"><img src="https://img.shields.io/badge/.env-ECD53F?style=for-the-badge"/></a>
</p>

> Veja o arquivo [package.json](./package.json)

---

## 🧜‍♀️ Autora

<a href="https://www.linkedin.com/in/yaracristinatavares/" >
 <img style="border-radius: 50%" src="https://avatars.githubusercontent.com/u/91642311?v=4" width="100px;" alt="foto"/>
 <p>Yara Tavares 🚀</p>
</a>
  
---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).
