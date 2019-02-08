// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma (valor1, valor2){
    return valor1 + valor2;
}
// console.log(soma(1, 2));

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var somaTotal = soma(2, 3) + 5
// console.log(somaTotal)

// Qual o valor atualizado dessa variável?
// 10

// Declare uma nova variável, sem valor.
var adicioneValor

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function atribuiValor(){
    adicioneValor = 12;
    return 'O valor da variavel agora é ' + adicioneValor;
}

// Invoque a função criada acima.
// console.log(atribuiValor())


// Qual o retorno da função? (Use comentários de bloco).
//O valor da variavel agora é 12

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function preenchaTudo(arg1, arg2, arg3) {
    if(arg1 === undefined || arg2 === undefined || arg3 === undefined){
        return 'Retorne todos os valores corretamente!';
    }else{
        return (arg1 * arg2 * arg3) + 2;
    }
}


// Invoque a função criada acima, passando só dois números como argumento.
// console.log(preenchaTudo(1, 2))

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Entrou no if

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
// console.log(preenchaTudo(1, 2, 1))


// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//4

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function minhaFuncao(arg1, arg2, arg3){
    if(arg1 !== undefined && arg2 === undefined && arg3 === undefined){
        return arg1;
    }else if(arg1 === undefined && arg2 !== undefined && arg3 === undefined){
        return arg2;
    }else if(arg1 === undefined && arg2 === undefined && arg3 !== undefined){
        return arg3;
    }else if(arg1 !== undefined && arg2 !== undefined && arg3 === undefined){
        return arg1 + arg2;
    }else if(arg1 !== undefined && arg2 === undefined && arg3 !== undefined){
        return arg1 + arg3;
    }else if(arg1 === undefined && arg2 !== undefined && arg3 !== undefined){
        return arg2 + arg3;
    }else if(arg1 !== undefined && arg2 !== undefined && arg3 !== undefined){
        return (arg1 + arg2) / arg3;
    }else if(arg1 === undefined && arg2 === undefined && arg3 === undefined){
        return false;
    }
    return null;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(minhaFuncao());
console.log(minhaFuncao(1));
console.log(minhaFuncao(1, 2));
console.log(minhaFuncao(1, 2, 3));
console.log(null);