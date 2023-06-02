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
        mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";

        finalizarAguardar();
        return false;
    }
    else {
        setInterval(sumirMensagem, 5000)
    }

    const checkbox = document.getElementById("checkBoxAnimais");
    const isChecked = checkbox.checked;
    if (isChecked) {
        // o checkbox está marcado

    } else {
        // o checkbox não está marcado
        const checkbox = document.getElementById("checkBoxPaisagem");
        const isChecked = checkbox.checked;
        if (isChecked) {
            // o checkbox está marcado
        } else {
            // o checkbox não está marcado
            const checkbox = document.getElementById("checkBoxFlores");
            const isChecked = checkbox.checked;
            if (isChecked) {
                // o checkbox está marcado
            } else {
                alert('É obrigatório selecionar um campo!')

            }
        }
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

function curtirBotao() {
    curtir.style.backgroundColor = 'red';
}

// Gráfico

const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Curtidos', 'Favoritados'],
        datasets: [{
            label: 'Registros',
            data: [12, 19],
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