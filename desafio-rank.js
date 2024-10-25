function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = (vitorias - derrotas);
    let nivel;

    // Determina o nível com base no número de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else { // vitorias >= 101
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

// Função principal para execução
function main() {
    // Solicita ao usuário a quantidade de vitórias e derrotas
    const vitorias = parseInt(53);
    const derrotas = parseInt(47);

    // Chama a função de cálculo
    const resultado = calcularNivel(vitorias, derrotas);

    // Exibe o resultado
    console.log(`O Herói tem saldo de ${resultado.saldoVitorias} vitórias está no nível de ${resultado.nivel}`);
}

// Executa a função principal
main();