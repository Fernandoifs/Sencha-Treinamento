Ext.define('Financer.view.categorias.Main', {
    extend: 'Ext.Panel',
    alias: 'widget.categoriasview',
    bodyPadding: 0,
    
    controller: 'categoriasmainview',
  
    viewModel: {
      type: 'categoriasview',
    },
  
    layout: {
      type: 'vbox',
      align: 'stretch',
    },
  
    items: [
      {
        xtype: 'categoriasgrid',
        reference: 'categoriasgrid',
        shadow: true,
        flex: 1,
        bind: {
          store: '{categorias}',
        },
      },
    ],
  });