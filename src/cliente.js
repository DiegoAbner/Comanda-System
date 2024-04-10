const prompt = require('prompt-sync')({ sigint: true });

// Criei esse array para funcionar como armazenamento da mesa do restaurante
let mesa = [];

// SEGUNDA TELA - Função para adicionar um cliente e valor total de sua comanda

function adicionarCliente() {
    let nome = prompt(" INFORME O NOME DO CLIENTE: ");
    let comanda = parseFloat(prompt(" INFORME O VALOR DA COMANDA: "));  //utilizei o parseFloat para converter a string em numero decimal

    // Pedir ao usuário que informe a forma de pagamento
    let formaPagamento = prompt(" INFORME A FORMA DE PAGAMENTO (PIX, CARTÃO OU DINHEIRO): ");

    // Verificar a forma de pagamento e calcular o valor total com desconto, se aplicável
    if (formaPagamento.toLowerCase() === "pix" || formaPagamento.toLowerCase() === "dinheiro") { // o uso do método toLowerCase é para garantir que o usuário possa digitar entre minúsculas e maiúsculas.
        comanda *= 0.9; // Esse cálculo fará com que o desconto de 10% seja aplicado
    }

    //Não será necessário incluir um "else" já que o valor da comanda já foi definido anteriormente.

    // Calcula o subtotal do valor declarado
    let subtotal = comanda;

    // Adiciona o cliente, o valor da comanda e calcula o valor da mesa
    mesa.push({ nome, comanda, subtotal });

    console.log(`Valor total de sua comanda é: R$ ${comanda.toFixed(2)} \n`);
}

module.exports = {
    adicionarCliente: adicionarCliente,
    mesa: mesa
};