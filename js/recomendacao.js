var botao_adicionar = document.querySelector("#adicionar_tabela");
var campo_nome = document.querySelector("input[name='nome']");
var campo_autor = document.querySelector("input[name='autor']");
var campo_duracao = document.querySelector("input[name='duracao']");
var campo_ano = document.querySelector("input[name='ano']");
var corpo_tabela = document.getElementById('recomendacao');
 
function enviarMusica(nome, autor, duracao, ano) {
    this.nome = nome;
    this.autor = autor;
    this.duracao = duracao;
    this.ano = ano;
 
 
this.mostrar_dados = function () {
    console.log("o nome é " + this.nome +
    "o autor é " + this.autor +
    "a duracao é " + this.duracao +
    "o ano é " + this.ano)
}
 
this.criar_linha_tabela = function () {
        var linha = document.createElement("tr");
        var campo_nome = document.createElement("td");
        var campo_autor = document.createElement("td");
        var campo_duracao = document.createElement("td");
        var campo_ano = document.createElement("td");
       
 
        linha.className = "boldd"
        campo_nome.className = "bold"
        campo_autor.className = "bold"
        campo_duracao.className = "bold"
        campo_ano.className = "bold"
 
        var texto_nome = document.createTextNode(this.nome);
        var texto_autor = document.createTextNode(this.autor);
        var texto_duracao = document.createTextNode(this.duracao);
        var texto_ano = document.createTextNode(this.ano);
 
        campo_nome.appendChild(texto_nome);
        campo_autor.appendChild(texto_autor);
        campo_duracao.appendChild(texto_duracao);
        campo_ano.appendChild(texto_ano);
 
        linha.appendChild(campo_nome);
        linha.appendChild(campo_autor);
        linha.appendChild(campo_duracao);
        linha.appendChild(campo_ano);
 
        corpo_tabela.appendChild(linha);
 
}
}
 
function adicionar(event) {
    event.preventDefault();
    nova_musica = new enviarMusica(campo_nome.value, campo_autor.value, campo_duracao.value, campo_ano.value);
    nova_musica.criar_linha_tabela();
}
 
botao_adicionar.addEventListener('click', adicionar);
 
/*
function enviarMusica(nome, autor, duracao, ano) {
 
    var tb = document.getElementById('recomendacao');
    var qtdLinhas = tb.ariaRowSpan.length;
    var linha = tb.insertRows(qtdLinhas);
 
    var Codigo = linha.insertCell(0);
    var Nome = linha.insertCell(1);
    var Autor = linha.insertCell(2);
    var Duracao = linha.insertCell(3);
    var Ano = linha.insertCell(4);
 
    Codigo.innerHTML = qtdLinhas;
    Nome.innerHTML = nome;
    Autor.innerHTML = autor;
    Duracao.innerHTML = duracao;
    Ano.innerHTML = ano;
 
   
}
*/
 
 
/*function enviarMusica(evento) {
   
    evento.preventDefault()
 
    const lista = document.querySelector('[data-tabela-body]')
 
    const input = document.querySelector('[data-form-nome]')
    const nome = input.value
 
    const input = document.querySelector('[data-form-nome]')
    const nome = input.value
 
    const tarefa = document.createElement('tr')
   
    const conteudo = `
    <td><input type="button" value="${nome}"></input></td>
    <td>${autor}</td>
    <td>${duracao}</td>
    <td>${ano}</td>  
`
   
    tarefa.innerHTML = conteudo
 
    lista.appendChild(tarefa)
    input.value = " "
}
 
const novaMusica = document.querySelector('[data-form-botao]')
novaMusica.addEventListener('click', enviarMusica)
 
/*
const novaMusica = (nome, autor, duracao, ano) => {
    const linhaRC = document.createElement('tr')
    const conteudo = `
                        <td><input type="button" value="${nome}"></input></td>
                        <td>${autor}</td>
                        <td>${duracao}</td>
                        <td>${ano}</td>  
                    `
 
                    linhaRC.innerHTML = conteudo
                    return linhaRC
}
 
const tabela = document.querySelector('[data-tabela-body]')
 
tabela.appendChild(novaMusica(nome, autor, duracao, ano))
*/
