var database = require("../database/config");

function buscarUltimasMedidas() {

    instrucaoSql = ''

    instrucaoSql = 'SELECT COUNT(curtidosAnimais) from MedidasAnimais;' 

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
}
