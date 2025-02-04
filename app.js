//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
document.addEventListener("DOMContentLoaded", function () {
    //Quando o HTML estiver totalmente carregado executa a função
    let amigos = []; //criando um array (lista).

    window.adicionarAmigo = function () { 
        //Retorna uma referência
        let input = document.getElementById("amigo");
        let nome = input.value.trim();
        //O método trim() remove os espaços em branco (whitespaces) do início e/ou fim de um texto.

        if (nome === "") { //verifica se o nome está vazio
            alert("Por favor, insira um nome válido.");
            return; //exibe um alerta e interrompe a execução da função 
        }

        amigos.push(nome);
        atualizarLista();
        input.value = "";
    };

    function atualizarLista() {
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";

        amigos.forEach(nome => {
            let li = document.createElement("li");
            li.textContent = nome;
            lista.appendChild(li);
        });
    }

    window.sortearAmigo = function () {
        if (amigos.length === 0) {
            alert("Adicione pelo menos um nome antes de sortear.");
            return;
        }
        //Escolhe um amigo aleatoriamente

        let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li>O amigo secreto é: <strong>${sorteado}</strong></li>`;
    };
});