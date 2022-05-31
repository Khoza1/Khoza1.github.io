

let da =  document.querySelector('.informa');


function valorcompiler(){
    let dic = { 

        'float':'o float e o numero flutuante',
        'if':'if e uma condicao',
        'else':'else e ocomplementar do if nota faz parte da condiçao',
        'for':'O for e uma estrutura de repetiçao',
        'typedef':'typedef e o tipo de funçao',
        'int':'int e uma variavel do tipo inteiro',
        'switch':'switch e um interuptor',
        'case':'case complementa o switch',
        'char':'char e uma variavel de string',
        'long':'long e uma variavel de numeros long',
        'default':'default e um comando de definiçao',
        'double':'double e uma variavel de numero flutuante do tipo double',
        'short':'short e uma variavel do tipo inteiro curto',
        'while':'while e uma estrutura de repetiçao',
        'do':'do e uma esturura de repetiçao que trabalha juntamente com o while',
        'break':'e um comando de freio',
        'delete':'e um comando para eliminar',
        'sizeof':'sizeof e um comando que pega tamanho de valor',
        'template':'template permite a configuraçao de template para a visualizaçao',
        'return':'return e um comando que retorna valor',
        'static':'static comando estatico',
        'struct':'struct comando para estrutura',
        'try':'comando para exceçao',
        '+':'operador logico de adicçao',
        '-':'operador logico de subtraçao',
        '*':'operador logico de multiplicaçao',
        '/':'operador logico de divisao',
        '&':'operador logico e',
        '||':'operador logico ou',
        '<':'operador logico menor',
        '>':'operador logico maior',
        '=':'operador logico igual',

    }   

    if((dic[da.value.trim()])){
        document.querySelector('.resultados').innerHTML= (dic[da.value.trim()]);
        document.querySelector('.resultados').style.backgroundColor = 'green';
        document.querySelector('h2').innerHTML= "ok 200 palavra reservada encotrada";
    }  

    else if(da.value==""){
        document.querySelector('.resultados').innerHTML= 'Campo vazio introduza comando na entrada';
        document.querySelector('.resultados').style.backgroundColor = 'violet';
        document.querySelector('h2').innerHTML= "fail 404 espaço vazio";
    }

    else if(da.value.trim()=='ajuda'){
        alert(
            
            'Espreçoes suportadas no anlizador lexica Khoza v1\nfloat, if, else, for,\n,typedef,int, switch, case, char, long, default\n double, short, while, do, break, delete,sizeof\ntemplate,return, static,struct ,try,+, -, *, /, &, ||, <, >, ='
        )
    }

    else if(da.value.trim()=='Alcamate'){
        alert(
            
            'Alcamate Dossa docente do curço de eng informatica\n Programa criado pelo estudante Felix Juliano Antonio Khoza'
        )
    }


    else{
        document.querySelector('.resultados').innerHTML= 'O nalisador lexical identficou essa palavra\t'+(da.value)+'\tcomo nao reservada';
        document.querySelector('.resultados').style.backgroundColor = 'red';
        document.querySelector('h2').innerHTML= "fail 404 infelizmente nao foi detectado valor valido";
    }
}







