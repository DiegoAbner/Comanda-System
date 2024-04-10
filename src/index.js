// a constante prompt serve para dar o direito do usuário digitar. Todo prompt que aparecerá abaixo, chama essa função.
const prompt = require('prompt-sync')({ sigint: true });

//Espaço reservado para importar as funções dos arquivos separados
const adicionarCliente = require('./cliente').adicionarCliente;
const exibirMesa = require('./mesa');
const adicionarGorgeta = require('./gorgeta');



//PRIMEIRA TELA - Função principal para interação com o usuário
function main() {
    
    let mesa = [];

    while (true) {
        let opcao = prompt("\nESCOLHA UMA OPÇÃO:\n \n =====================================\n 1 - Adicionar Cliente à Mesa\n 2 - Visualizar consumo da Mesa\n 3 - Adicionar Gorjeta\n 4 - Encerrar todas as Comandas\n 5 - Abortar Lançamentos \n =====================================\n DIGITE A OPÇÃO DESEJADA:  ");

        switch (opcao) {
            case "1":
                adicionarCliente();
                break;
            case "2":
                exibirMesa();
                break;
            case "3":
                adicionarGorgeta(mesa); // Passe a variável mesa como argumento
                break;
            case "4":
                console.log("\nPAGAMENTOS CONFIRMADOS - MESA LIBERADA\n");
                return;
            case "5":
                console.log("\nATENÇÃO: Todos os lançamentos da mesa foram CANCELADOS\n");
                return;
            default:
                console.log("Opção inválida. Por favor, escolha uma opção entre '1' e '5'.");
        }
    }
}

// Inicia o programa
main();