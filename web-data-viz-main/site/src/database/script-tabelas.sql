-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

CREATE DATABASE RainbowEye;

USE RainbowEye;

CREATE TABLE Usuário (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nomeCompleto VARCHAR(45),
    nomeUser VARCHAR(15),
    senha VARCHAR(30),
    biografia VARCHAR(50)
);

CREATE TABLE Perfil (
	idPerfil INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(40),
    telCelular CHAR(11),
    fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario)
) AUTO_INCREMENT = 100;

CREATE TABLE Registro (
	idRegistro INT PRIMARY KEY AUTO_INCREMENT,
    imgRegistro VARCHAR(50),
    legenda VARCHAR(35),
    fkPerfil INT,
    FOREIGN KEY (fkPerfil) REFERENCES Perfil(idPerfil)
) AUTO_INCREMENT = 1000;

/*
comandos para criar usuário em banco de dados azure, sqlserver,
com permissão de insert + update + delete + select
*/

CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
