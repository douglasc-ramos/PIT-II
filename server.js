// PROJETO INTEGRADOR EM ENGENHARIA DE SOFTWARE II
// Nome: Douglas Coutinho Ramos
// Instituição: Universidade Positivo
// RGM: 28860179
// Semestre: 7º / 2024

const express = require('express');
const app = express();
const PORT = 3000;

// Rota principal para exibir mensagem de boas-vindas
app.get('/', (req, res) => {
    res.send('Bem-vindo ao Backend da Cafeteria!');
});

// Inicia o servidor na porta definida
app.listen(PORT, () => {
    console.log(`Servidor está rodando em http://localhost:${PORT}`);
});
