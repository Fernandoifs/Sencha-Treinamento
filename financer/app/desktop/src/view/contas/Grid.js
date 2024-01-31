Ext.define("Financer.view.contas.Grid", {
  extend: "Ext.grid.Grid",
  alias: "widget.contasgrid",

  columns: [
    {
      text: "Vencimento",
      dataIndex: "data_vencimento",
      formatter: 'date("d/m/Y")',
      align: "center",
      width: 110,
    },
    {
      text: "Categoria",
      dataIndex: "categoria_id",
      width: 130,
    },
    {
      text: "Descrição",
      dataIndex: "descricao",
      flex: 1,
    },
    {
      text: "Fornecedor",
      dataIndex: "fornecedor_id",
      width: 130,
    },
    {
      text: "Valor Previsto",
      dataIndex: "valor",
      align: "right",
      width: 120,
    },
    {
      text: "Valor Pago",
      dataIndex: "valor_pago",
      align: "right",
      width: 120,
    },
    {
        hidden: true,
      text: "Valor do Pagamento",
      dataIndex: "data_pagamento",
      formatter: 'date("d/m/Y")',
      align: "center",
      width: 110,
    },{
        text: 'Status',
        width: 120,
        
    }
  ],
});
