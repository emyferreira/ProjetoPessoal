var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM Usuário;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM Usuário WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, username, senha, biografia) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, username, senha, biografia);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Usuário (nome, email, username, senha, biografia) VALUES ('${nome}', '${email}', '${username}', '${senha}', '${biografia}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function curtir1(idUsuario, curtidosAnimais) {

    var instrucao = `
    INSERT INTO Medida (idUsuario, curtidosAnimais) VALUES (${idUsuario}, '${curtidosAnimais}');
    `;

    return database.executar(instrucao);
}

function curtir2(idUsuario, curtidosPaisagem) {

    var instrucao = `
    INSERT INTO Medida (idUsuario, curtidosPaisagem) VALUES (${idUsuario}, '${curtidosPaisagem}');
    `;

    return database.executar(instrucao);
}

function curtir3(idUsuario, curtidosFlores) {

    var instrucao = `
    INSERT INTO Medida (idUsuario, curtidosFlores) VALUES (${idUsuario}, '${curtidosFlores}');
    `;

    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    curtir1,
    curtir2,
    curtir3,
};