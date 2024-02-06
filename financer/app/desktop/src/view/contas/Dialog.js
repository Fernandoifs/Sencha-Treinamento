Ext.define('Financer.view.contas.Dialog', {
  extend: 'Ext.Dialog',
  layout: 'fit',
  
  controller: 'contasdialog',

  width: 900,
  height: 600,
  title: 'Cadastrar de Contas a Pagar',
  closable: true,
  maximizable: true,

  items: [
    { xtype: 'contasform', reference: 'form' },
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