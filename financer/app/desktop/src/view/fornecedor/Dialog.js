Ext.define('Financer.view.fornecedor.Dialog', {
  extend: 'Ext.Dialog',

  controller: 'fornecedordialog',

  layout: 'fit',
  width: 900,
  height: 550,
  title: 'Cadastro de Fornecedores',
  closable: true,
  maximizable: true,

  items: [
    { xtype: 'fornecedorform', reference: 'form' },
    {
      xtype: 'toolbar',
      docked: 'bottom',
      layout: {
        layout: 'hbox',
        pack: 'end',
      },

      items: [{
        xtype: 'button',
        iconCls: 'x-fa fa-trash',
        handler: 'onDeleteHandler'
      }, {
        xtype: 'spacer', //para separa os dois botoes
        flex: 1
      }, {
        xtype: 'button',
        text: 'Salvar',
        handler: 'onSaveHandler'
      }]

    }]

});