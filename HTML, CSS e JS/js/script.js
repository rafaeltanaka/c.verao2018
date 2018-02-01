var hoje = new Date();
var ano = hoje.getFullYear();
var mes = hoje.getMonth();
var dia = hoje.getDate();
var diaDaSemana = hoje.getDay();
// Primeiro dia do Calendário
function calculaPrimeiroDiaDoCalendario() {
    let primeiroDiaDoMes = new Date(ano, mes, 1);
    let primeiroDiadoCalendario = new Date();
    primeiroDiadoCalendario.setDate(primeiroDiaDoMes.getDate() - primeiroDiaDoMes.getDay());
    return primeiroDiadoCalendario
};
// Último dia do Calendário
function calculaUltimoDiaDoCalendario() {
    let ultimoDiaDoMes = new Date(ano, mes + 1, 1);
    ultimoDiaDoMes.setDate(ultimoDiaDoMes.getDate() - 1);
    let ultimoDiaDoCalendario = new Date();
    ultimoDiaDoCalendario.setDate(ultimoDiaDoMes.getDate() + (6 - ultimoDiaDoMes.getDay()));
    return ultimoDiaDoCalendario;
};
var primeiro = calculaPrimeiroDiaDoCalendario();
var ultimo = calculaUltimoDiaDoCalendario();
console.log(primeiro, ultimo);
// Gera dias do Calendário
var linha = document.createElement('div');
linha.setAttribute('class', 'linha linha-0');
var calendario = document.querySelector('#calendario');
var diaAtual = new Date();
diaAtual.setTime(primeiro);
while (diaAtual <= ultimo) {
    var divDia = document.createElement('div');
    divDia.innerHTML = diaAtual.getDate();
    var classe = 'dia-container dia-' + diaAtual.getDay();
    var id = diaAtual.getFullYear();
        id += ' - ' + (diaAtual.getMonth() + 1);
        id += ' - ' + diaAtual.getDate();
    divDia.setAttribute('class', classe);
    divDia.setAttribute('id', id);
    divDia.onclick = function(evento) { /* mudar css de overlay e formulario */
        overlay.style.display = 'block';
        formulario.style.display = 'flex';
        salvar.setAttribute('data-dia', this.id);
    };
    // divDia.className = 'dia-container'
    linha.appendChild(divDia);
    if(diaAtual.getDay() == 6) {
        calendario.appendChild(linha);
        linha = document.createElement('div');
        linha.setAttribute('class', 'linha');
    };
    if ((diaAtual.getDate() == dia) && (diaAtual.getMonth() == mes)) {
        divDia.setAttribute('class', classe + ' hoje');
    };
    diaAtual.setDate(diaAtual.getDate() + 1);
};

// OVERLAY e FORMULÁRIO desaparecem
var overlay = document.querySelector('#overlay');
overlay.onclick = function(evento) {
    this.style.display = 'none';
    var formulario = document.querySelector('#formulario');
    formulario.style.display = 'none';
    salvar.setAttribute('data-dia', '');
}

//*SALVAR
var salvar = document.querySelector('#salvar');
salvar.onclick = function(evento) {
    var titulo = document.querySelector('#titulo');
    var local = document.querySelector('#local');
    var eventos = JSON.parse(localStorage.getItem('eventos') || "{}"); /* json.parse transforma em string */
    // if (!eventos) {
    //     eventos = {};
    // } else {

    // }
    var dia = this.getAttribute('data-dia');
    eventos[dia] = eventos[dia] || []
    eventos[dia].push ( {
        titulo: titulo.value,
        local: local.value,
    })
    //LOCAL STORAGE - .setItem() - pode fechar navegador --> guarda string
    //SESSION STORAGE - .setItem() - temporário --> guarda string
    localStorage.setItem("titulo", JSON.stringify(eventos));
    alert(eventos);
}
