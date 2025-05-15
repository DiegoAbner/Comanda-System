
# 💵 Comanda System – Sistema de Consumo via Terminal

Este projeto simula um sistema de comanda digital executado diretamente no terminal. Ele permite o controle de clientes, consumo individual e coletivo por mesa, além do cálculo de gorjetas.

## 🧠 Objetivo

Praticar a lógica de programação com foco em entrada e saída de dados no terminal, uso de módulos e manipulação de arrays e objetos em JavaScript.

## 🛠️ Tecnologias

- JavaScript (Node.js)
- prompt-sync

## ⚙️ Funcionalidades

- Cadastro de clientes por mesa
- Registro de consumo por cliente
- Cálculo total por mesa
- Aplicação de gorjeta
- Saída detalhada no terminal com `console.log`

## 💡 Aprendizados

- Modularização do código em JS
- Uso de `require()` para importar scripts
- Entrada de dados com `prompt-sync`
- Manipulação de listas e objetos
- Organização e clareza de código no terminal


## 👩🏿‍💻 Histórias de usuários 👨🏽‍💻
Uma história do usuário é uma explicação informal e geral sobre um recurso de software escrita a partir da perspectiva do usuário final. Seu objetivo é articular como um recurso de software pode gerar valor para o cliente. No caso desta aplicação, a utilização é voltada para o atendimento de mesas em restaurantes, operada diretamente por um atendente via terminal.

- ### Primeira História de Usuário
Eu, como garçom/garçonete, inicio o sistema via terminal para registrar o nome dos clientes que estão sentados na mesa, evitando anotações manuais.

- ### Segunda História de Usuário
Eu, como garçom/garçonete, informo individualmente os itens consumidos por cada cliente, garantindo o controle específico de consumo.

- ### Terceira História de Usuário
Eu, como garçom/garçonete, acompanho o total acumulado de cada cliente e da mesa, sem precisar realizar cálculos manualmente.

- ### Quarta História de Usuário
Eu, como garçom/garçonete, decido se será aplicada ou não a taxa de gorjeta, de acordo com a política do restaurante ou escolha do cliente.

- ### Quinta e última História de Usuário
Eu, como garçom/garçonete, finalizo o atendimento visualizando um resumo detalhado com o valor total da mesa, a divisão proporcional por cliente e a aplicação (ou não) da gorjeta.


## ▶️ Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/comanda-system.git
```

2. Acesse a pasta do projeto:
```bash
cd comanda-system/src
```

3. Instale a dependência:
```bash
npm install prompt-sync
```

4. Execute o sistema:
```bash
node index.js
```
