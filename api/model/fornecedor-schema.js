const { banco } = require("./conexao");

const FornecedorSchema = new banco.Schema({
    _id: banco.Schema.Types.ObjectId,
    name: String,
    phone: Number,
    address: String,
    address_complement: String,
    address_reference: String,
    address_number: Number,
    address_neighborhood: String,
    address_state: String,
    address_city: String, address_postal_code: Number, email: String, cnpj_cpf: Number, rg_ie: Number
});

const Fornecedor = banco.model("Fornecedor", FornecedorSchema, "fornecedores");

module.exports = { Fornecedor };