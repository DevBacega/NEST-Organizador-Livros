<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest

# Requisições REST com NEST.JS

## Nest.JS

O Nest.JS é um framework de Node.JS que nos auxiliar a criar rotas,validações,requisições ao banco de dados no modo REST de um jeito mais fácil.

### Instalação:
Para fazer a instalação do NEST, após instalar o NODE.JS execute os comandos a baixo na pasta do projeto.
```bash
$ npm i -g @nestjs/cli
$ nest new project-name
```

### Libs de auxilio:
Iremos usar 2 Libs para auxiliar a fazer a validação dos dados enviados do Front-end, elas são:

     npm install class-validator
	     - Lib para fazer as validações no DTO.
     npm install class-transformer
		 - Lib para auxiliar na criação de tipos para as validações no DTO
StackEdit stores your files in your browser, which means all your files are automatically saved locally and are accessible **offline!**

### Banco de Dados:

Utilizamos o banco de dados MongoDB para o projeto, e para fazer o vinculo do Nest com o Mongo, instalamos o Mongoose, com os @types do Typescript.
```bash
$ npm install --save @nestjs/mongoose mongoose
$ npm install --save-dev @types/mongoose
```

## Projeto

Criamos uma API Restful para fazer a organização de livros, iremos cadastras, pesquisar, atualizar e deletar o banco que contem esses livros, no nosso caso o MongoDB.

![enter image description here](https://lh3.googleusercontent.com/moZE0N83QOAioDO1XWbg6rybnHXx9E0oZLTmdUNyZlEa8fSwG1XmQQQkvjboVL-G6zwA81RDeblIwm-I_CvQnwLsFYRxn6SlFEIPQXwigld-BL7WdJAGixdxh3PxP0P0p_Or_ivN1jRABV9BUzjebY-phAvNBtsfWgc2YwwD_v5jZtuKCGPFJpWphICmMcFvxWUB3wYOOVrnaPKV7oI86zuE5K1NtbgplTswv9NPvzPUU6uCoLghNTzuPs6YUJ5PVPG82ekUYeoa2CpQn1gsAJHDCDUmeI3nHUfUfEeGbN7lXoQS720Ltsg23ethQ17Ab_bkHBksxRkEzR4OtYmQd4SFmGzoZ1C1IHmWXVq04BsIwsqcd3MFeyClUxBh5WjjGN6_sM23Hnb1EETV7r_iZoDPD-um7Y4kVI5U-xFlikQqn2IbCj76f_r0B-zECCNg21o5bjyal7ZDRcb09PcOOeQEfu0Y9kf1jTHWGthPiEZHGQ5EjAByMnw3_-2hD6W7-xPDMT5XntOUWiTN_M_xdiw3WBYF8_Vn9I6HENktmIb5KylHR1xUkJK-7EWcHlrdq9pBlSTjuKa7NJHOeSsyb77tB4vSSutHCN3q2wNFceDp3mftBS1MnKhm4BF6xlofn-l-TazNWoUMDj7lvam4cSlbcZCkDNn8ejdwEZdFZPhumDVWr0CueBFzyfTm=w985-h916-no?authuser=1)


  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](LICENSE).

