const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A chuva ácida provoca inúmeras perdas ambientais para o meio. Esse fenômeno ocorre com frequência em regiões industriais devido ao",
        alternativas: [
            {
                texto: "a) processo de contaminação do solo pela produção industrial.",
                afirmacao: ""
            },
            {
                texto: "b) aumento da quantidade de vapor de água dissipado no ar.",
                afirmacao: ""
            },
            {
                texto: "c) conjunto de dinâmicos atmosfericos influenciadas pela água.",
                afirmacao: ""
            },
        ]
    },
    {
        enunciado: "O Brasil enfrenta diversos problemas ambientais que prejudicam as diferentes espécies que aqui vivem. De acordo com IBGE, Três problemas ambientais são os mais relatados no Brasil. Marque a alternativa que indica esses problemas:",
        alternativas: [
            {
                texto: "a) Poluição do solo, poluição atmosférica e contaminação por metais pesados.",
                afirmacao: ""
            },
            {
                texto: "b) Poluição atmosférica, queimadas e caça.",
                afirmacao: ""
            },
            {
                texto: "c) assoreamento, desmatamento e queimadas.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "O aquecimento global, o problema ambiental mais preocupante na atualidade, é a elevação acelerada das temperaturas médias da terra. São causas desse problema exceto:",
        alternativas: [
            {
                texto: "a) queima de combustíveis fósseis, que libera grande quantidade de gases de efeito estufa.",
                afirmacao: ""
            },
            {
                texto: "b) redução das geleiras presentes nos polos do planeta e nos topos das montanhas.",
                afirmacao: ""
            },
            {
                texto: "c) queimadas e desmatamento de áreas florestais.",
                afirmacao: ""
            }
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
    historiaFinal = afirmacoes + "O meio ambiente pode estar enfrentando desafios significativos, mas também pode haver avanços notáveis na sustentabilidade e na conservação como, mudanças climáticas, energias renováveis, biodiversidade, tecnologia verde, conscientização global, políticas ambientais.";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049..."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
