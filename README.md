<h1 align="center">
    NestJS Micro-service RabbitMQ 🌆
</h1>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rodando">Rodando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<a id="rocket-tecnologias"></a>

## 🚀 Tecnologias

<div align="center">
 	<img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white" />
    <img src="https://img.shields.io/badge/Rabbitmq-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white" />
    <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" />
    <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" />
</div>

<br>

<a id="-projeto"></a>

## 💻 Projeto

Esse repositório tem como intuito criar um micro serviço de compras. Foi usado 3 aplicações com o NestJS, uma de criação de produto, um com criação de usuário e outro que utiliza o RabbitMQ como sistema de fileiras.

Ele usa como login um cookie que é gerado depois que o usuário recebe um JsonWebToken depois de efetuar o login. Cada aplicação usa um banco de dados MongoDB independente.

<a id="-rodando"></a>

## Rodando o projeto 🌇

## Requerimentos:

- [NodeJS](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)

## 📂 UM comando só:

Você não precisa configurar os arquivos `.env`, mas sinta-se livre se quiser mudar alguma variável de ambiente.

🐬 Comando:

```bash
docker-compose up --build -V
```

## ☕ Dicas:

Se você quiser acessar a documentação das aplicações, você pode acessar via algumas URLS.

Documentação Swagger do app Auth:

`http//localhost:3001/auth/swagger`

Documentação Swagger do app Order:

`http//localhost:3000/order/swagger`

<a id="-como-contribuir"></a>

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.
