# CRUD PARA APRESENTAR A EMPRESA INDRA. #
# Desenvolvido por : Jonatan Simão
# Contato jonatanmarcel@gmail.com

# baixar o projeto e digitar no cmd da pasta do projeto npm install

*/Rotas/*

# api/store - Cadastrar
# api/index - Listar
# api/update/id - Atualizar
# api/delete/id - Deletar

*/Script do Banco de Dados./*

CREATE DATABASE CRUD;

USE CRUD;

CREATE TABLE CADASTRO(

    ID INT NOT NULL AUTO_INCREMENT,
    NOME VARCHAR(100) NOT NULL,
    EMAIL VARCHAR(100) NOT NULL,
    SENHA VARCHAR(32) NOT NULL,
    PRIMARY KEY(ID)
);


*/ npm start para rodar o projeto /*