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
    nome VARCHAR(45),
    email VARCHAR(50),
    username VARCHAR(15),
    senha VARCHAR(30),
    biografia VARCHAR(50)
);

CREATE TABLE Nicho (
	idPerfil INT PRIMARY KEY AUTO_INCREMENT,
    nichoFavorito VARCHAR(40),
    fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES Usuário(idUsuario)
) AUTO_INCREMENT = 100;

CREATE TABLE Dashboard (
    idDashboard INT PRIMARY KEY AUTO_INCREMENT,
    favoritos INT,
    curtidos INT,
    fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES Usuário(idUsuario)
) AUTO_INCREMENT = 1000;

CREATE TABLE Registro (
	idRegistro INT PRIMARY KEY AUTO_INCREMENT,
    imgRegistro VARCHAR(50),
    legenda VARCHAR(35),
    fkPerfil INT,
    FOREIGN KEY (fkPerfil) REFERENCES Perfil(idPerfil)
) AUTO_INCREMENT = 10000;

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
