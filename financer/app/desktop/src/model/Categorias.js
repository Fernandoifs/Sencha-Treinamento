Ext.define('Financer.model.Categorias', {
    extend: 'Financer.model.Base',
    idProperty: 'id',
    
    requires: [
        'Ext.data.validator.Presence',
        'Ext.data.proxy.LocalStorage',
        'Ext.data.proxy.Rest',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    // pra json local //
    proxy: {
        type: 'ajax',
        url: '/resources/desktop/categorias.json',
        reader: {
          type: 'json',
          rootProperty: 'data',
        },
        writer: {
            type: 'json'
        },
        autoLoad: true
      },
     
    validators: {
        nome: 'presence'
    },

    fields: [
        { name: 'id', type: 'int' },
        { name: 'nome' },
    ]

})