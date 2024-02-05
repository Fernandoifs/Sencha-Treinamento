Ext.define('Financer.view.contas.Main', {
extend: 'Ext.Panel',
alias: 'widget.contasview',

controller: 'contasmainview', 

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