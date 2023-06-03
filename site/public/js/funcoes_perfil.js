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
    const checkbox = document.getElementById("checkBoxAnimais");
    const isChecked = checkbox.checked;
    if (isChecked) {
        // o checkbox está marcado
        animaisFav.style.display = 'block';
        paisagemFav.style.display = 'none';
        floresFav.style.display = 'none';
    } else {
        // o checkbox não está marcado
        const checkbox = document.getElementById("checkBoxPaisagem");
        const isChecked = checkbox.checked;
        if (isChecked) {
            // o checkbox está marcado
            animaisFav.style.display = 'none';
            paisagemFav.style.display = 'block';
            floresFav.style.display = 'none';
        } else {
            // o checkbox não está marcado
            const checkbox = document.getElementById("checkBoxFlores");
            const isChecked = checkbox.checked;
            if (isChecked) {
                // o checkbox está marcado
                animaisFav.style.display = 'none';
                paisagemFav.style.display = 'none';
                floresFav.style.display = 'block';
            } else {
                alert('É obrigatório selecionar um campo!')

            }
        }
    }
 }

function curtir1() {

    var idUsuario = sessionStorage.ID_USUARIO;
    var curtido = (curtido +=1);

     console.log ("post curtido!");
     msgPostCurtido.innerHTML = 'Post Curtido!';

     fetch("/usuarios/curtir1", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idServer: idUsuario,
            curtirServer: curtido++
        })
     })

     return false;

}

function curtir2() {

    var idUsuario = sessionStorage.ID_USUARIO;
    var curtido2 = 1;

     console.log ("post curtido!");

     fetch("/usuarios/curtir2", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idServer: idUsuario,
            curtir2Server: curtido2
        })
     })
     
     return false;

}

function curtir3() {

    var idUsuario = sessionStorage.ID_USUARIO;
    var curtido3 = 1;

     console.log ("post curtido!");

     fetch("/usuarios/curtir3", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idServer: idUsuario,
            curtir3Server: curtido3
        })
     })
     
     return false;

}