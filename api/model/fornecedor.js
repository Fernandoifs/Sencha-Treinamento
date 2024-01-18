const { Fornecedor } = require('./fornecedor-schema');

const obterFornecedores = async () => {
  return await Fornecedor.find();
};
const incluir = async (fornecedor) => {
  return await Fornecedor.create(fornecedor);
};
const excluir = async (codigo) => {
  return await Fornecedor.deleteOne({ _id: codigo });
};

module.exports = { Fornecedor, obterFornecedores, excluir, incluir };