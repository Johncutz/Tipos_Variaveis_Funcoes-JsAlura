const nome = "John";
const idade = 2022 - 2002;
const cidadeDeNascimento = "São Paulo";

const apresentacao1 = "meu nome é " + nome + ", minha idade é " + idade +
    " e nasci na cidade de " + cidadeDeNascimento;

const apresentacao2 = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;

console.log(apresentacao2);