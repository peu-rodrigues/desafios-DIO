// Função para classificar o nível do herói
function classificarHeroi(nome, experiencia, pet) {
    let nivel;

    // Estrutura de decisão para determinar o nível com base na experiência
    if (experiencia < 1000) {
        nivel = "Ferro";
    } else if (experiencia >= 1001 && experiencia <= 2000) {
        nivel = "Bronze";
    } else if (experiencia >= 2001 && experiencia <= 5000) {
        nivel = "Prata";
    } else if (experiencia >= 5001 && experiencia <= 7000) {
        nivel = "Ouro";
    } else if (experiencia >= 7001 && experiencia <= 8000) {
        nivel = "Platina";
    } else if (experiencia >= 8001 && experiencia <= 9000) {
        nivel = "Ascendente";
    } else if (experiencia >= 9001 && experiencia <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // Exibindo a mensagem final
    console.log(`O Herói ${nome} é um Cavaleiro de Classe ${nivel} que está sempre acompanhado de sua parceira ${nomePet}, sua cachorrinha.`);
}

// Exemplo de uso
let nomeHeroi = "Rafael"; // Você pode alterar o nome do herói aqui
let experienciaHeroi = 7563; // Você pode alterar a experiência do herói aqui
let nomePet = "Flora"

classificarHeroi(nomeHeroi, experienciaHeroi, nomePet);