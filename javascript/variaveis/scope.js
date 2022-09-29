// Escopo determina a visibilidade de alguma variável no JS

// var é global e também loca

console.log('existe x antes do bloco?', x)

{
    var x = 2
}

console.log('existe x depois do bloco?', x)