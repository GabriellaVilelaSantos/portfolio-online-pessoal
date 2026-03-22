document.getElementById('formContato').addEventListener('submit', function(event) {
    // Impede o envio padrão do formulário para processamento via JS
    event.preventDefault();

    // Captura dos valores dos campos para validação
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Expressão regular simples para validar o formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Lógica de validação obrigatória dos campos e formato do e-mail
    if (nome === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Simulação de envio com feedback visual ao usuário
    alert("Mensagem enviada com sucesso!");
    
    // Limpeza dos campos após o "envio" bem-sucedido
    this.reset();
});
// Função para alternar entre as seções
function mostrarSecao(id) {
    // 1. Seleciona todas as seções dentro do main
    const secoes = document.querySelectorAll('main section');
    
    // 2. Remove a classe 'active' de todas elas
    secoes.forEach(secao => {
        secao.classList.remove('active');
    });

    // 3. Adiciona a classe 'active' apenas na seção clicada
    const secaoAtiva = document.getElementById(id);
    if (secaoAtiva) {
        secaoAtiva.classList.add('active');
    }
}

// Configura os cliques no menu assim que a página carrega
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Impede o pulo da página
            const idAlvo = link.getAttribute('href').substring(1); // Pega o ID (ex: 'sobre')
            mostrarSecao(idAlvo);
        });
    });

    // Mostra a seção "Sobre mim" por padrão ao abrir o site
    mostrarSecao('sobre');
});

// --- MANTENHA O CÓDIGO DE VALIDAÇÃO DO FORMULÁRIO ABAIXO ---
document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nome === "" || mensagem === "" || !emailRegex.test(email)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    alert("Mensagem enviada com sucesso!");
    this.reset();
});
// Seleciona os elementos
const menuIcon = document.getElementById('menu-icon');
const menuNav = document.getElementById('menu');
const linksInternos = document.querySelectorAll('#menu a');

// Função para abrir/fechar o menu
menuIcon.addEventListener('click', () => {
    menuNav.classList.toggle('open');
});

// Fecha o menu automaticamente ao clicar em um link (opção do usuário)
linksInternos.forEach(link => {
    link.addEventListener('click', () => {
        menuNav.classList.remove('open');
    });
});