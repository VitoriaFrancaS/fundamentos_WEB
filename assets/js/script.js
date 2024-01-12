/*palavras reservadas = var (escopo global), let(escopo local), const(escopo global, variavel constatnte)*/

/*
 * Case sensitive = reconhece letras maiusculas e minusculas 
 * 
 * por tag: getElementById()
 * por Id: getElementById()
 * por Nome: getElementsByName()
 * por classe: getElementsByClassName()
 * por Seletor: querySelector()
 * 
 */
let nome = window.document.getElementById('nome') /*Se colocar # ou . a variavel não consegue identificar que elemento você está puxando */
let email = document.querySelector('#email') /*#nome para chamar ID, .nome para chaamr a classe. PS. se não colocar # ou . o selector não reconhece*/
let mensagem = document.querySelector('#mensagem')
let nomeOk = false
let emailOk = false
let mensagemOk = false

function ValidaNome(){ 
    let txtNome = document.querySelector('#txtNome') /*Eu peguei a div que está no html e trouxe para a funçãpo*/
    if(nome.value.length <= 2) {
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function ValidaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@')== - 1 || email.value.indexOf('.') == -1) {
    txtEmail.innerHTML = 'Email inválido'
    txtEmail.style.color = 'red'
 } else { 
    txtEmail.innerHTML = 'Email válido'
    txtEmail.style.color = 'green'
    emailOk = true
    }
}

function ValidaMsg() {
    let txtMsg = document.querySelector('#txtMsg') 
    if(mensagem.value.length >= 100) {
    txtMsg.innerHTML = "Mensagem muito grande, no máximo 100 caracteres"
    txtMsg.style.color = 'red'
    txtMsg.style.display = 'block'

} else {
    txtMsg.style.display = 'none'
    mensagemOk = true
}

}

function submitForm() {
    if(nomeOk == true && emailOk == true && mensagemOk == true) {
        alert('Dúvida enviada com sucesso')
    } else {
        alert('Preencha os campos corretamente antes de enviar')
    }
}
/*nome.style.width = '100%'= aumenta o campo de nome*/