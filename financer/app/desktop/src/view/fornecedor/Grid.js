Ext.define('Financer.view.fornecedor.Grid', {
    extend: 'Ext.grid.Grid',
    alias: 'widget.fornecedorgrid',
  
    requires: ['Ext.dataview.plugin.ListPaging', 'Ext.grid.plugin.Editable'],
    plugins: {
      listpaging: {
        autoPaging: true
      },
      grideditable: true
    },
   
    items: [
      {
        xtype: 'toolbar',
        docked: 'top',
        items: [
          {
            xtype: 'button',
            ui: 'action', //aplica o tema no botao
            text: 'Novo',
            tooltip: 'Clique para Adicionar um novo Registro',
            listeners:{
              tap: 'onNovoButtonTap'
            }
          },{
            xtype: 'button',
            text: 'Editar',
            tooltip: 'Clique para Editar um Registro',
            listeners:{
              tap: 'openEditButtonTap'
            }
          },{
            xtype: 'button',
            ui: 'decline',
            text: 'Excluir',
            tooltip: 'Clique para Editar um Registro',
            listeners:{
              tap: 'openDelButtonTap'
            }
          },
        ],
      },
    ],
  
    columns: [
      {
        text: 'ID',
        dataIndex: 'id',
        width: 50,
      },
      {
        text: 'Nome',
        dataIndex: 'nome',
        flex: 1,
        editable: true,
      },
      {
        text: 'CPF',
        dataIndex: 'cpf',
        width: 200,
      },
      {
        text: 'Telefone',
        dataIndex: 'telefone',
        width: 200,
      },
      {
        text: 'Email',
        dataIndex: 'email',
        width: 350,
      },
    ],
  });