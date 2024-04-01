const prompt = require('prompt-sync')({sigint:true});

// Criei esse array para funcionar como armazenamento da mesa do restaurante
let mesa = [];

// SEGUNDA TELA - Função para adicionar um cliente e valor total de sua comanda

function adicionarCliente() {
    let nome = prompt("INFORME O NOME DO CLIENTE: ");
    let preco = parseFloat(prompt("INFORME O VALOR DA COMANDA: "));  //utilizei o parseFloat para converter a string em numero decimal
    let quantidade = parseInt(prompt("Informe a quantidade do produto:")); //utilizei o parseInt para converter a string em numeros inteiros

    // Calcula o subtotal do produto
    let subtotal = preco * quantidade;

    // Adiciona o produto ao carrinho
    mesa.push({ nome, preco, quantidade, subtotal });

  alert(`Produto: ${nome}, foi adicionado ao carrinho.`); 
  alert(`Valor por item: R$ ${preco} \n`);
}

// Função para exibir os itens do carrinho e o total da compra
function exibirMesa() {
    let mensagem = "Produtos no carrinho:";

    // Itera sobre os produtos no carrinho
    mesa.forEach(produto => {
        mensagem += `\nNome: ${produto.nome}\n`;
        mensagem += `Preço unitário: R$ ${produto.preco.toFixed(2)}\n`;
        mensagem += `Subtotal: R$ ${produto.subtotal.toFixed(2)}\n`;
    });

    // Para calcular o valor total da compra
    let total = mesa.reduce((acc, produto) => acc + produto.subtotal, 0);//pesquisar reduce map filter

    mensagem += `Total da compra: R$ ${total.toFixed(2)}\n`;

    alert(mensagem);
}

//PRIMEIRA TELA - Função principal para interação com o usuário
function main() {
    while (true) {
        let opcao = prompt("ESCOLHA UMA OPÇÃO:\n \n 1 - Adicionar Cliente à Mesa\n 2 - Visualizar consumo da Mesa\n 3 - Encerrar todas as Comandas\n 4 - Abortar Lançamentos \n DIGITE A OPÇÃO DESEJADA:  ");

        switch (opcao) {
            case "1":
                adicionarCliente();
                break;
            case "2":
                exibirMesa();
                break;
            case "3":
                console.log ("COMPRA FINALIZADA. Supermercados Abner agradece pela compra");
                return;
            case "4":
                console.log ("Já vai? Que pena. Esperamos nos ver em breve =]");
                return;
            default:
                console.log ("Opção inválida. Por favor, escolha uma opção entre '1' e '4'.");
        }
    }
}

// Inicia o programa
main();