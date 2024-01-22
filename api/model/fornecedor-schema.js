const { banco } = require("../bin/conexao");

const FornecedorSchema = new banco.Schema({
    _id: banco.Schema.Types.ObjectId,
    nome: String,
    telefone: Number,
    cpf: Number,
    endereco: String,
    numero: Number,
    cep: Number,
    email: String

});

const Fornecedor = banco.model("Fornecedor", FornecedorSchema, "fornecedores");

module.exports = { Fornecedor };
