Ext.define("Financer.view.categorias.Grid", {
  extend: "Ext.grid.Grid",
  alias: "widget.categoriasgrid",

  //requires: ["Ext.plugins.Rowedit"],

  plugins: {
    rowedit: true,
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
          tooltip: "Clique aqui",
          handler: "onNovoButtonTap",
        }, {
          xtype: 'button',
          text: 'Editar',
          tooltip: 'Clique para Editar um Registro',
          disabled: true,
          bind: {
            disabled: '{!categoriasgrid.selection}'
          },
          listeners: {
            tap: 'openEditButtonTap'
          }
        }, {
          xtype: 'button',
          ui: 'decline',
          text: 'Excluir',
          tooltip: 'Clique para Excluir um Registro',
          bind: {
            hidden: '{!categoriasgrid.selection}'
          },
          listeners: {
            tap: 'openDelButtonTap'
          }
        }],
        
}],
  columns: [
    {
      text: "ID",
      dataIndex: "id",
      width: 60,
      hidden: true,
    },
    {
      text: "Descrição",
      dataIndex: "descricao",
      editable: true,
      flex: 1,
    },
  ],
});
