const { obterFornecedores, incluir, excluir } = require('../controller/fornecedor');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {   
        const fornecedores = await obterFornecedores();
        res.json(fornecedores);

    } catch (error) {
        console.error('Erro ao obter fornecedores:', error);
        res.status(500).send(error.message);
    }
});

router.post('/', async (req, res) => {
    try {
        const fornecedor = req.body;
        await incluir(fornecedor);
        res.json({ mensagem: 'Novo fornecedor incluído!' });
    } catch (error) {
        console.error('Erro ao incluir fornecedor:', error);
        res.status(500).send(error.message);
    }
});

router.delete('/:codigo', async (req, res) => {
    try {
        const codigo = req.params.codigo;
        await excluir(codigo);
        res.json({ mensagem: 'Fornecedor excluído com sucesso!' });
    } catch (error) {
        console.error('Erro ao excluir fornecedor:', error);
        res.status(500).send(error.message);
    }
})
module.exports = router;