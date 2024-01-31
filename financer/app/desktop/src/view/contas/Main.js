Ext.define('Financer.view.contas.Main', {
extend: 'Ext.Panel',
alias: 'widget.contasview',

viewModel: {
    type: 'contasviewmodel',
  },

items: [{
    xtype: 'contasgrid',
    reference: 'contasgrid',
    shadow: true,
    flex: 1,
    bind: {
        store: '{contas}'
    },
}]
    
});