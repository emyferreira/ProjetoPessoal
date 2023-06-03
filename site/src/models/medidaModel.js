var database = require("../database/config");

function buscarUltimasMedidas(idDashboard, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        sum(curtidosAnimais) as animais, 
        sum(curtidosPaisagem) as paisagem, 
        sum(curtidosFlores) as flores,  
                     where fkDashboard = ${idDashboard}
                    order by idDashboard desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select top ${limite_linhas}
        sum(curtidosAnimais) as animais, 
        sum(curtidosPaisagem) as paisagem, 
        sum(curtidosFlores) as flores,  
                     where fkDashboard = ${idDashboard}
                    order by idDashboard desc`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idDashboard) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        sum(curtidosAnimais) as animais, 
        sum(curtidosPaisagem) as paisagem, 
        sum(curtidosFlores) as flores,  
                     where fkDashboard = ${idDashboard}
                    order by idDashboard desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select top ${limite_linhas}
        sum(curtidosAnimais) as animais, 
        sum(curtidosPaisagem) as paisagem, 
        sum(curtidosFlores) as flores,  
                     where fkDashboard = ${idDashboard}
                    order by idDashboard desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
