// Desafio Classificador de nível de Herói

// Lista Inicial de Herois 
const herois = [
    {nome: "Aragorn", xp: 7500 },
    {nome: "Gandalf", xp: 10001 },
    {nome: "Legolas", xp: 7000 },
    {nome: "Fernanda", xp: 8750 },
    {nome: "Herói de Ferro", xp: 999 },
    
];

// -- Funções --

/**
 * Determina o nível de um herói com base em sua experiência (XP).
 * @param {number} xp - Aquantidade de experiência do herói
 * @returns {string} O nível do herói
 */

function determinarNivel(xp) {
    if (xp <= 1000) {
        return "Ferro";
    }else if (xp <= 2000) {
        return  "Bronze";
    }else if (xp <= 5000) {
        return "Prata";
    }else if (xp <= 7000) {
        return "Ouro";
    }else if (xp <= 8000) {
        return  "Platina";
    }else if (xp <= 9000) {
        return "Ascendente";
    }else if (xp <= 10000) {
        return "Imortal";
    }else {
        return "Radiante";
    }
}

/**
 * Renderiza a tabela de heróis na página.
 * A função limpa a tabela, ordena os heróis por XP e os exibe.
 */
function renderizarTabela() {
    const corpoTabela = document.getElementById("ranking-body");
    // Limpa o conteúdo anterior para evitar duplicatas
    corpoTabela.innerHTML = "";

// Ordena os heróis pelo XP, do maior para o menor
    herois.sort((a, b) => b.xp - a.xp);

// Itera sobre a lista de heróis e exibe o nível de cada um na tabela
    herois.forEach((heroi, index) => {
        const nivelHeroi = determinarNivel(heroi.xp);
        // Adiciona uma nova linha (tr) na tabela para cada herói
        const novaLinha = `<tr>
            <td>${index + 1}º</td>
            <td>${heroi.nome}</td>
            <td>${heroi.xp}</td>
            <td>${nivelHeroi}</td>
        </tr>`;
        corpoTabela.innerHTML += novaLinha;
    });
}

// -- Lógica Principal e Eventos --

// Adiciona um "escutador" para o evento de envio do formulário
document.getElementById("add-hero-form").addEventListener("submit", function(event) {
    // Impede o comportamento padrão do formulário (que é recarregar a página)
    event.preventDefault();

    const nome = document.getElementById("hero-name").value;
    const xp = parseInt(document.getElementById("hero-xp").value, 10);

    // Adiciona o novo herói ao array
    herois.push({ nome: nome, xp: xp });

    // Re-renderiza a tabela com o novo herói
    renderizarTabela();

    // Limpa os campos do formulário
    this.reset();
});

// Renderiza a tabela inicial quando a página carrega
renderizarTabela();
