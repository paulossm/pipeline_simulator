'use strict';

var instrucoes = ["add", "sub", "beq", "bne", "lw", "sw", "j" ];
var estagios = {
    'if': [],
    'id': [],
    'ex': [],
    'mem': [],
    'wb': []
};

var dividirInstrucoes = function ( instrucoes ) {
    /*
    *    Recebe instruções MIPS em forma de texto e retorna um array de instruções por linha do texto.
    *    @param instrucoes: texto de instruções MIPS
    *
    ~    Exemplo entrada:
            beq $s0, $s1, DENTRO
            add $t1, $t2, $t3
            lw $t0, 128($t1)
            DENTRO:
            sub $t1, $t2, $t3
            add $s5, $t1, $t4
    ~
    *
    *    @return Array de instruções MIPS
    *
    ~    Exemplo saida:
            Array [ "beq $s0, $s1, DENTRO", "add $t1, $t2, $t3", "lw $t0, 128($t1)", "DENTRO:", "sub $t1, $t2, $t3", "add $s5, $t1, $t4" ]
    ~
    */
    return instrucoes.split(/\n/);
};

var detalharInstrucoes = function ( sequencia_instrucoes ) {
    /*
    *    Recebe instruções MIPS em forma de array e retorna um array de instruções e operandos.
    *    @param sequencia_instrucoes: Array de instruções
    *
    ~    Exemplo entrada:
            Array [ "beq $s0, $s1, DENTRO", "add $t1, $t2, $t3", "lw $t0, 128($t1)", "DENTRO:", "sub $t1, $t2, $t3", "add $s5, $t1, $t4" ]
    ~
    *
    *    @return Array de instruções e operandos
    *
    ~    Exemplo saida:
            Array [ Array ["beq", "$s0", "$s1", "DENTRO"] , Array ["add", "$t1", "$t2", "$t3"], ... ]
    ~
    */
    var instrucoes_detalhadas = [];

    for(var contador = 0; contador < sequencia_instrucoes.length; contador++) {

        var instrucao = [];
        instrucao.push(sequencia_instrucoes[contador].split(" ")[0]);

        var parametros = sequencia_instrucoes[contador].substring(instrucao[0].length + 1, sequencia_instrucoes[contador].length).split(", ");

        for(var sub_contador = 0; sub_contador < parametros.length; subcontador++) {
            instrucao.push(parametros[sub_contador]);
        }

        instrucoes_detalhadas.push(instrucao);
    }

    return instrucoes_detalhadas;
};

var simular = function ( instrucoes ) {
    /*
    *    execução do programa
    *    @param instrucoes: entrada do usuário. Instruções MIPS em formato de texto
    *
    */
    var sequencia_instrucoes = dividirInstrucoes(instrucoes);
    var detalhes_instrucoes = detalharInstrucoes(sequencia_instrucoes);

    do {

    }

};
