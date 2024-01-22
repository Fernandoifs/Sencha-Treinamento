Ext.define('Financer.model.Fornecedor', {
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
    // proxy: {
    //     type: 'ajax',
    //     url: '/resources/desktop/fornecedores.json',
    //     reader: {
    //       type: 'json',
    //       rootProperty: 'data',
    //     },
    //     autoLoad: true
    //   },


   // pegar da api //
      proxy: {
        type: 'ajax',
        url: 'http://localhost:1000/fornecedor',
        reader: {
          type: 'json',
          rootProperty: 'data',
        },
        autoLoad: true
      },
      
    validators: {
        nome: 'presence'
    },

    fields: [
        { name: 'id', type: 'int' },
        { name: 'nome' },
        { name: 'telefone' },
        { name: 'cpf' },
        { name: 'endereco' },
        { name: 'numero' },
        { name: 'cep' },
        { name: 'email' }
    ]

})