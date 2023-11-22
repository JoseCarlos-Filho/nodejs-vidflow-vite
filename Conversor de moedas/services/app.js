// Declaração de variáveis

const moeda_corrente = document.querySelector('.moeda_corrente');
const moeda_convertida = document.querySelector('.moeda_convertida');
const input_numero = document.querySelector('.input_numero');
const output_valor = document.querySelector('output_valor');



/* Funçao que seleciona os tipos de moedas a serem convertidas */
function selecoes() {
  let moedas = {"BRL": "Real", "EUR": "Euro", "USD": "Dollar"};
  let opcoes = [];
  for (let [chave, valor] of Object.entries(moedas)) {
    opcoes.push(`<option value='${chave}'>${valor}</option>`);
  }
  moeda_corrente.innerHTML = opcoes.join('\n');
  moeda_convertida.innerHTML = opcoes.join('\n');
}

selecoes();