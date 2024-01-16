Ext.define("Financer.model.Fornecedor", {
  extend: "Financer.model.Base",

  idProperty: "id",

    proxy: {
      type: "ajax",
      url: "/resources/desktop/fornecedores.json",
      reader: {
        type: "json",
        rootProperty: "data",
      },
    },


  validator: {
    name: "presence ",
  },

  fields: [
    { name: "id", type: "int" },
    { name: "nome" },
    { name: "telefone" },
    { name: "endereco" },
    { name: "endereco_numero" },
    { name: "estado" },
    { name: "cidade" },
    { name: "cep" },
    { name: "email" },
    { name: "create_at", type: "date", dateFormat: "Y-m-d H:i:s" },
    { name: "update_att", type: "date", dateFormat: "Y-m-d H:i:s" },
  ],
});
