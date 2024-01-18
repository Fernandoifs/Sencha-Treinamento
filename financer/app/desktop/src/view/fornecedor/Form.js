Ext.define('Financer.view.fornecedor.Form', {
  extend: 'Ext.form.Panel',
  alias: 'widget.fornecedorform',
  requires:[
    'Ext.field.Container',
    'Ext.field.trigger.Search'
  ],

  viewModel: true,
  modelValidation: true,

  items: [
    { xtype: 'textfield', label: 'Nome', bind: {value: '{record.nome}'} },
    {
      xtype: 'fieldcontainer',
      defaults: {
        flex: 1,
      },

      items: [
        { xtype: 'textfield', label: 'Telefone', margin: '0 5 0 0', bind: {value: '{record.telefone}'}},
        { xtype: 'textfield', label: 'Email', bind: {value: '{record.email}'} },
      ],
    }, {
      xtype: 'fieldcontainer',
      defaults: {
        flex: 1,
      },

      items: [
        { xtype: 'textfield', label: 'CPF', margin: '0 5 0 0' , bind: {value: '{record.cpf}'} },
        { xtype: 'textfield', label: 'RG', bind: {value: '{record.rg}'} },
      ],
    },{
      xtype: 'textfield',
      label: 'CEP',
      width: '35%',
      bind: {value: '{record.cep}'},
      triggers: [
        {
          type: 'search',
          handler: 'onSearchCep',
        },
      ],
    }, {
      xtype: 'fieldcontainer',
      defaults: {
    
      },
      items: [
        { xtype: 'textfield', label: 'Endereço', flex: 1,margin: '0 5 0 0', bind: {value: '{record.endereco}'} },
        { xtype: 'textfield', label: 'Nº', width: 100, margin: '0 5 0 0', bind: {value: '{record.numero}'}},
        { xtype: 'textfield', label: 'Complemento', flex: 1, bind: {value: '{record.complemento}'}},   
      ],
      
    },{
      xtype: 'textfield',
      label: 'Bairro',
      bind: {value: '{record.bairro}'}
    }
    
  ],
});
