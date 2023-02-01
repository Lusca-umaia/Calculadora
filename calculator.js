document.getElementById('result').innerHTML = localStorage.getItem('ultimoResultado')

let controle = 0
localStorage.setItem("controle", controle)

function capturar(numm) {
    let valuee = document.getElementById('input').value
    document.getElementById('input').value = valuee + numm
}

function somar() {
    if (localStorage.getItem("controle") == 0) {
        let somarResut = 1
        localStorage.setItem('somarRe', somarResut)

        localStorage.setItem("controle", 1)
        let armazenar = document.getElementById('input').value

        localStorage.setItem('primeiroValor', armazenar)
        document.getElementById('input').value = ""
    }
}

function subtrair() {
    if (localStorage.getItem("controle") == 0) {
        let subtrairResut = 1
        localStorage.setItem('subRe', subtrairResut)

        localStorage.setItem("controle", 1)
        let armazenar = document.getElementById('input').value

        localStorage.setItem('primeiroValor', armazenar)
        document.getElementById('input').value = ""
    }
}

function multiplicar() {
    if (localStorage.getItem("controle") == 0) {
        let multiplicarResut = 1
        localStorage.setItem('multiRe', multiplicarResut)

        localStorage.setItem("controle", 1)
        let armazenar = document.getElementById('input').value

        localStorage.setItem('primeiroValor', armazenar)
        document.getElementById('input').value = ""
    }
}
function dividir() {
    if (localStorage.getItem("controle") == 0) {
        let dividirResut = 1
        localStorage.setItem('dividirRe', dividirResut)

        localStorage.setItem("controle", 1)
        let armazenar = document.getElementById('input').value

        localStorage.setItem('primeiroValor', armazenar)
        document.getElementById('input').value = ""
    }
}

function resultado() {
    if (localStorage.getItem("somarRe") == 1) {
        if (document.getElementById('input').value == "") {
            document.getElementById('input').value = "0"
        }
        let result = localStorage.getItem('primeiroValor') + "+" + document.getElementById('input').value

        localStorage.setItem('somarRe', 0)
        localStorage.setItem("controle", 0)
        localStorage.setItem('primeiroValor', "")

        localStorage.setItem('ultimoResultado', eval(result))
        document.getElementById('result').innerHTML = localStorage.getItem('ultimoResultado')

        document.getElementById('input').value = ""
    }

    if (localStorage.getItem("subRe") == 1) {
        if (document.getElementById('input').value == "") {
            document.getElementById('input').value = "0"
        }
        let result = localStorage.getItem('primeiroValor') + "-" + document.getElementById('input').value

        localStorage.setItem('subRe', 0)
        localStorage.setItem("controle", 0)
        localStorage.setItem('primeiroValor', "")

        localStorage.setItem('ultimoResultado', eval(result))
        document.getElementById('result').innerHTML = localStorage.getItem('ultimoResultado')

        document.getElementById('input').value = ""
    }

    if (localStorage.getItem("multiRe") == 1) {
        if (document.getElementById('input').value == "") {
            document.getElementById('input').value = "0"
        }
        let result = localStorage.getItem('primeiroValor') + "*" + document.getElementById('input').value

        localStorage.setItem('multiRe', 0)
        localStorage.setItem("controle", 0)
        localStorage.setItem('primeiroValor', "")

        localStorage.setItem('ultimoResultado', eval(result))
        document.getElementById('result').innerHTML = localStorage.getItem('ultimoResultado')

        document.getElementById('input').value = ""
    }

    if (localStorage.getItem("dividirRe") == 1) {
        if (document.getElementById('input').value == "") {
            document.getElementById('input').value = "0"
        }
        let result = localStorage.getItem('primeiroValor') + "/" + document.getElementById('input').value

        localStorage.setItem('dividirRe', 0)
        localStorage.setItem("controle", 0)
        localStorage.setItem('primeiroValor', "")

        localStorage.setItem('ultimoResultado', eval(result))
        document.getElementById('result').innerHTML = localStorage.getItem('ultimoResultado')

        document.getElementById('input').value = ""
    }
}