// declaração de função

function minhaFuncao(param) {
    // bloco de código
}

minhaFuncao("param");

// expressão de função

const soma1 = function(num1, num2) {return num1  + num2};
console.log(soma1(1, 1));

// diferença principal : HOISTING
// funções e var são "listdas" no topo do arquivo

console.log(apresentar());
function apresentar() {
    return "olá";
};

console.log(soma2(1, 1))
const soma2 = function(num1, num2) {return num1  + num2};