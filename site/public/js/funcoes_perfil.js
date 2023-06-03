function avancar() {
    cadastroTela1.style.display = 'none';
    cadastroTela2.style.display = 'block';
}

function cadastrar() {
    aguardar();

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = nome_input.value;
    var emailVar = email_input.value;
    var userVar = user_input.value;
    var senhaVar = senha_input.value;
    var confirmacaoSenhaVar = confirmacao_senha_input.value;
    var biografiaVar = biografia_input.value;

    if (nomeVar == "" || emailVar == "" || userVar == "" || senhaVar == "" || confirmacaoSenhaVar == "") {
        cardErro.style.display = "block"
        mensagem_erro.innerHTML = "(Erro: todos os campos estão em branco!)";

        finalizarAguardar();
        return false;
    }
    else {
        setInterval(sumirMensagem, 5000)
    }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar,
            userServer: userVar,
            senhaServer: senhaVar,
            biografiaServer: biografiaVar
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            cardErro.style.display = "block";

            mensagem_erro.innerHTML = "Cadastro realizado! Entre fazendo o Login...";

            setTimeout(() => {
                window.location = "login.html";
            }, "2000")

            limparFormulario();
            finalizarAguardar();
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
    });

    return false;
}

function sumirMensagem() {
    cardErro.style.display = "none"
}

 // Gráfico

 const ctx = document.getElementById('myChart');

 new Chart(ctx, {
     type: 'bar',
     data: {
         labels: ['Animais', 'Paisagens', 'Flores'],
         datasets: [{
             label: 'Categorias curtidas',
             data: [],
             borderWidth: 1,
             backgroundColor: [
             'rgba(38, 0, 22, 1)'
             ],
             borderColor: [
             'rgba(38, 0, 22, 1)'
             ],
         }]
     },
     options: {
         indexAxis: 'y',
     }

 });

 function atualizarFavs() {
    var select = nichos.value;
    var nichoAnimais = animaisOption.value;
    var nichoPaisagens = paisagensOption.value;
    var nichoFlores = floresOption.value;

    if (select == nichoAnimais) {
        animaisFav.style.display = 'block';
        paisagemFav.style.display = 'none';
        floresFav.style.display = 'none';
        nichoEscolhido.innerHTML = 'Animais';
    } if (select == nichoPaisagens) {
        paisagemFav.style.display = 'block';
        animaisFav.style.display = 'none';
        floresFav.style.display = 'none';
        nichoEscolhido.innerHTML = 'Paisagens';
    } if (select == nichoFlores) {
        floresFav.style.display = 'block';
        animaisFav.style.display = 'none';
        paisagemFav.style.display = 'none';
        nichoEscolhido.innerHTML = 'Flores';
    } 
    
 }

function curtir1() {

    var fkUsuario = sessionStorage.ID_USUARIO;

     console.log ("post curtido!");
     msgPostCurtido.innerHTML = 'Post Curtido!';

     fetch("/usuarios/curtir1", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fkUsuarioServer: fkUsuario,
        })
     }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            cardErro.style.display = "block";

            mensagem_erro.innerHTML = "post curtidooo";

            limparFormulario();
            finalizarAguardar();
        } else {
            throw ("Houve um erro ao curtir!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;

}

function curtir2() {

    var idUsuario = sessionStorage.ID_USUARIO;

     console.log ("post curtido!");

     fetch("/usuarios/curtir2", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idServer: idUsuario,
        })
     })
     
     return false;

}

function curtir3() {

    var idUsuario = sessionStorage.ID_USUARIO;

     console.log ("post curtido!");

     fetch("/usuarios/curtir3", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idServer: idUsuario,
        })
     })
     
     return false;

}