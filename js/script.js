const trilho = document.querySelector('.trilho');
const slides = document.querySelectorAll('.slide');
const btnAnterior = document.querySelector('.anterior');
const btnProximo = document.querySelector('.proximo');
const areaBolinhas = document.querySelector('.bolinhas');
const perguntas = document.querySelectorAll(".pergunta-resposta");

let atual = 0;

slides.forEach((_, i) => {
    const b = document.createElement('button');
    b.className = 'bolinha';
    b.setAttribute('aria-label', 'Ir para o slide ' + (i + 1));
    b.addEventListener('click', () => irPara(i));
    areaBolinhas.appendChild(b);
});

const bolinhas = document.querySelectorAll('.bolinha');

function irPara(indice) {
    atual = (indice + slides.length) % slides.length; // volta ao início/fim
    trilho.style.transform = `translateX(-${atual * 100}%)`;
    bolinhas.forEach((b, i) => b.classList.toggle('ativa', i === atual));
}

btnAnterior.addEventListener('click', () => irPara(atual - 1));
btnProximo.addEventListener('click', () => irPara(atual + 1));

irPara(0);

perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', () => {
        const resposta = pergunta.querySelector('.resposta');
        const fechar = pergunta.querySelector('.fechar');
        const estaAberta = resposta.classList.contains('aberta');

        pergunta.classList.toggle('shadow');
        fechar.classList.toggle('rotate45');
        resposta.classList.toggle('aberta');

        if (!estaAberta) {
            resposta.style.maxHeight = resposta.scrollHeight + 'px';
        } else {
            resposta.style.maxHeight = null;
        }
    });
});