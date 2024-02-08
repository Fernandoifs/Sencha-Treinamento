Ext.define("Financer.model.Contas", {
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

  validators: {
    valor: "presence",
    data_vencimento: "presence",
    fornecedor_id: "presence",
    categorias_id: "presence",
    total_parcelas: "presence",
  },

  proxy: {
    type: 'ajax',
    url: '/resources/desktop/contas.json',
    reader: {
      type: 'json',
      rootProperty: 'data',
    },
    autoLoad: true
  },

  fields: [
    { name: "id", type: "int" },
    { name: "fornecedor_id", type: "int" },
    //{ name: "fornecedor_nome", mapping: 'supplier.name', persist: false},
    { name: "categorias_id", type: "int" },
    //{ name: "categorias_descricao", mapping: 'bill_category.descriptinon', persist: false},
    { name: "descricao", type: "string" },
    { name: "parcelas", type: "int", defaultValue: 1 },
    { name: "total_parcelas", type: "int", defaultValue: 1 },
    { name: "data_pagamento", type: "date" },
    { name: "data_vencimento", type: "date" },
    { name: "valor", type: "float" },
    { name: "descontos", type: "float" },
    { name: "total_pago", type: "float" },
    { name: "total_parcelas", type: "int" },
    { name: "observações", type: "string" },
  ],
});
