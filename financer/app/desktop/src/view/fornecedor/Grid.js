Ext.define("Financer.view.fornecedor.Grid", {
  extend: "Ext.grid.Grid",
  alias: "widget.fornecedorgrid",

  requires: ["Ext.dataview.plugin.ListPaging", "Ext.dataview.plugin.Editable"],
  plugins: {
    listpaging: {
      autoPaging: true
    },
    grideditable: true
  },

  items: [
    {
      xtype: "toolbar",
      docked: "top",
      items: [
        {
          xtype: "button",
          ui: "action",
          text: "Novo",
          tooltip: "Clique para Adicionar um novo Registro",
          listeners:{
            tap: 'onNovoButtonTap'
          }
        },
      ],
    },
  ],

  columns: [
    {
      text: "ID",
      dataIndex: "id",
      width: 50,
    },
    {
      text: "Nome",
      dataIndex: "nome",
      flex: 1,
      editable: true,
    },
    {
      text: "Telefone",
      dataIndex: "telefone",
      width: 200,
    },
    {
      text: "Email",
      dataIndex: "email",
      width: 250,
    },
  ],
});
