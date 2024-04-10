// Importe a variável mesa de cliente.js
const mesa = require('./cliente').mesa;

// Função para exibir os clientes registrados à mesa e consumo total
function exibirMesa() {
    let mensagem = "CLIENTES REGISTRADOS NA MESA:\n";

    // Itera sobre os clientes na mesa
    mesa.forEach(cliente => {
        mensagem += `\nNome: ${cliente.nome}\n`;
        mensagem += `Valor total da Comanda: R$ ${cliente.comanda.toFixed(2)}\n`;
        mensagem += `Subtotal: R$ ${cliente.subtotal.toFixed(2)}\n`;
    });

    // Para calcular o valor total da compra
    let total = mesa.reduce((acc, cliente) => acc + cliente.subtotal, 0); //Dica do Tiago: pesquisar reduce, map e filter para entender

    mensagem += `\n-----> CONSUMO TOTAL DA MESA: R$ ${total.toFixed(2)} <-----\n`;

    console.log(mensagem);
}

// Exporte a função exibirMesa
module.exports = exibirMesa;
