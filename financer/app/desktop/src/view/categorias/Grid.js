Ext.define('Financer.view.categorias.Grid', {
  extend: 'Ext.grid.Grid',
  alias: 'widget.categoriasgrid',

  requires: ['Ext.grid.rowedit.Editor', 'Ext.grid.plugin.PagingToolbar'],

  plugins: {
    rowedit: true,
    gridpagingtoolbar: true
  },

  listeners: {
    edit: 'onRowGridEdit'
  },

  items: [
    {
      xtype: 'toolbar',
      docked: 'top',
      items: [
        {
          xtype: 'button',
          ui: 'action',
          text: 'Novo',
          tooltip: 'Clique aqui',
          handler: 'onNovoButtonTap',
        }],

    }],
  columns: [
    {
      text: 'ID',
      dataIndex: 'id',
      width: 60,
      hidden: true,
    },
    {
      text: 'Descrição',
      dataIndex: 'descricao',
      editable: true,
      flex: 1,
    },
    {
      align: 'center',
      width: 100,
      cell: {
        tools: {
          remove: {
            iconCls: 'x-fa fa-trash',
            handler: 'onDeleteToolsHandler'
          }
        }
      }

    }
  ],
});
