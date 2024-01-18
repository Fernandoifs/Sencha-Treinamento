Ext.define('Financer.view.fornecedor.Main', {
    extend: 'Ext.Panel',
    alias: 'widget.fornecedoresview',
    bodyPadding: 0,
  
    controller: 'fornecedormainview',
  
    viewModel: {
      type: 'fornecedorview',
    },
  
    layout: {
      type: 'vbox',
      align: 'stretch',
    },
  
    items: [
      {
        xtype: 'fornecedorgrid',
        reference: 'fornecedorgrid',
        shadow: true,
        flex: 1,
        bind: {
          store: '{fornecedores}',
        },
      },
    ],
  });