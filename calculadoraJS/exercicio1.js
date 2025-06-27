function loadNum(botao) {
    let visor = document.getElementById('output');
    let valor = botao.value;

    if (valor === '.') {
        let partes = visor.value.split(/[\+\-\*\/\%]/)
        let ultimoNum = partes[partes.length - 1];

        if (ultimoNum.includes(".")) {
            return;
        }
    }

    visor.value = visor.value + valor;
}

function loadOp(botao) {
    let visor = document.getElementById('output');
    let ultimoOp = visor.value.slice(-1);
    let operador = botao.value;

    if ("+-%/*".includes(ultimoOp)) {
        visor.value = visor.value.slice(0, -1) + operador
    } else {
        visor.value = visor.value + botao.value;
    }

}

function loadResult(botao) {
    let visor = document.getElementById('output');

    if ("08032025".includes(visor.value)) {
        visor.value = "Eu te amo, Mariana <3";
        return;

    } else if ("558855".includes(visor.value)) {
        visor.value = "Bruno viado";
        return;
    }

    try {
        let resultado = eval(visor.value);
        visor.value = resultado;
    } catch {
        visor.value = "ERRO";
    }

}

function delNum() {
    let visor = document.getElementById('output');
    visor.value = visor.value.slice(0, -1)
}

function delAll() {
    let visor = document.getElementById('output');
    visor.value = '';
}