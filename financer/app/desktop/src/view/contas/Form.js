Ext.define("Financer.view.contas.Form", {
  extend: "Ext.form.Panel",
  alias: "widget.contasform",
  requires: ["Ext.field.Container", "Ext.field.trigger.Search"],

  viewModel: true,
  modelValidation: true,

  items: [
    {
      xtype: "fieldset",
      title: "Dados Principais",
      layout: { type: "vbox" },

      items: [
        {
          xtype: "fieldcontainer",
          items: [{
            xtype: "combobox",
            label: "Categorias",
            autoLoadOnValue: true,
            margin: "0 5 0 0",
            flex: 2,
            valueField: "id",
            displayField: "descricao",
            store: { model: Financer.model.Categorias },
            bind:{
              value: '{record.categorias_id}'
            }
          }, {
            xtype: "datefield",
            label: "Vencimento",
            flex: 1,
            bind:{
              value: '{record.data_vencimento}'
            }
          }]

        }, {
          xtype: "fieldcontainer",
          items: [
            {
              xtype: "combobox",
              label: "Fornecedores",
              autoLoadOnValue: true,
              margin: "0 5 0 0",
              flex: 2,
              valueField: "id",
              displayField: "nome",
              store: { model: Financer.model.Fornecedor },
              bind:{
                value: '{record.fornecedor_id}'
              }
            }, {
              xtype: "numberfield",
              label: "Valor",
              flex: 1,
              bind:{
                value: '{record.valor}'
              }
            }]
        }, {
          xtype: "textfield",
          label: "Descrição",
          bind:{
            value: '{record.descricao}'
          }
        }, {
          xtype: "textareafield",
          label: "Observação",
          height: 120,
          bind:{
            value: '{record.observacao}'
          }
        }]
    }, {
      xtype: "checkboxfield",
      reference: "checkcontapaga",
      boxLabel: "Conta Paga",
      width: 85
    }, {
      xtype: 'fieldset',
      title: 'Informações de Pagamento',
      disabled: true,
      bind: {
        disabled: '{!checkcontapaga.checked}'
      },

      items: [{
        xtype: 'fieldcontainer',
        defaults: { flex: 1 },
        items: [
          {
            xtype: "datefield",
            label: "Data Pgto",
            margin: "0 5 0 0",
            bind:{
              value: '{record.data_pagamento}'
            }
          }, {
            xtype: "numberfield",
            label: "Valor Pago",
            margin: "0 5 0 0",
            bind:{
              value: '{record.total_pago}'
            }
          }, {
            xtype: "numberfield",
            label: "Juros e Multas",
            margin: "0 5 0 0",
          }, {
            xtype: "numberfield",
            label: "Descontos",
            bind:{
              value: '{record.descontos}'
            }
          }]
      }]
    }]
});


