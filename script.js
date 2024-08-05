const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A chuva ácida provoca inúmeras perdas ambientais para o meio. Esse fenômeno ocorre com frequência em regiões industriais devido ao:",
        alternativas: [
            {
                a) processo de contaminação do solo pela produção industrial.

                b) aumento da quantidade de vapor de água dissipado no ar.

                c) conjunto de dinâmicos atmosfericos influenciadas pela água.
    
                d) aquecimento global gerado pela atenuação da temperatura.

                e) elevado volume de concentração de poluentes na atmosfera
            },
    {
        enunciado: "O Brasil enfrenta diversos problemas ambientais que prejudicam as diferentes espécies que aqui vivem. De acordo com IBGE, Très problemas ambientais são os mais Relatados No Brasil. Marque a alternativa que indica esses problemas:",
        alternativas: [
            {
                a) Poluição do solo, poluição atmosférica e contaminação por metais pesados.

                b) contaminação por metais pesados, desmatamento e caça.

                c) Poluição atmosférica, queimadas e caça.

                d) assoreamento, desmatamento e queimadas.
            },
    {
        enunciado: "O aquecimento global, o problema ambiental mais preocupante na atualidade, é a elevação acelerada das temperaturas médias da terra. São causas desse problema exceto:",
        alternativas: [
            {
                a) queima de combustíveis fósseis, que libera grande quantidade de gases de efeito estufa.
            
                b) redução das geleiras presentes nos polos do planeta e nos topes das montanhas.
            
                c) queimadas e desmatamento de áreas florestais.
            },
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
