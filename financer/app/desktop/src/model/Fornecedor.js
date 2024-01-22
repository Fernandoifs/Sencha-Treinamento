Ext.define("Financer.model.Fornecedor", {
  extend: "Financer.model.Base",
  idProperty: "id",

  requires: [
    "Ext.data.validator.Presence",
    "Ext.data.proxy.LocalStorage",
    "Ext.data.proxy.Rest",
    "Ext.data.proxy.Ajax",
    "Ext.data.reader.Json",
    "Ext.data.writer.Json",
  ],

  // pra json local //
  // proxy: {
  //     type: 'ajax',
  //     url: '/resources/desktop/fornecedores.json',
  //     reader: {
  //       type: 'json',
  //       rootProperty: 'data',
  //     },
  //     autoLoad: true
  //   },

  // pegar da api //
  proxy: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
      "Access-Control-Max-Age": "1000",
      "Access-Control-Allow-Headers":
        "x-requested-with, Content-Type, origin, authorization, accept, client-security-token",
    },
    type: "rest",
    url: "http://localhost:1000/fornecedores",
    reader: {
      type: "json",
      rootProperty: "data",
    },
    writer: {
      type: "json",
    },
    autoLoad: true,
  },

  validators: {
    nome: "presence",
  },

  fields: [
    { name: "id", type: "int" },
    { name: "nome" },
    { name: "telefone" },
    { name: "cpf" },
    { name: "endereco" },
    { name: "numero" },
    { name: "cep" },
    { name: "email" },
  ],
});
