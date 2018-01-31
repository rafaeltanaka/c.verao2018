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
    ultimoDiaDoCalendario.setDate(ultimoDiaDoCalendario.getDate() + (6 - diaDaSemana));
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
    divDia.setAttribute('class', classe);
    divDia.setAttribute('id', diaAtual.toISOString());
    divDia.onclick = function() {
        console.log('works');
    };
    divDia.onclick = function(evento) {
        console.log(this.id);
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

