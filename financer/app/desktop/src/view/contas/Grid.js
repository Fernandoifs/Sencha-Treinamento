Ext.define("Financer.view.contas.Grid", {
  extend: "Ext.grid.Grid",
  alias: "widget.contasgrid",

  height: 400,

  requires: ["Ext.dataview.plugin.ListPaging", "Ext.grid.plugin.Editable"],
  plugins: {
    pagingtoolbar: true,
    gridexporter: true
  },

  selectable: {
    checkbox: true,
  },

  items: [
    {
      xtype: "toolbar",
      docked: "top",
      items: [
        {
          xtype: "button",
          ui: "action",
          text: "Novo",
          tooltip: "Clique para Adicionar um novo Registro",
          listeners: {
            tap: "onNovoButtonTap",
          },
        },
        {
          xtype: "button",
          text: "Editar",
          tooltip: "Clique para Editar um Registro",
          disabled: true,
          bind: {
            disabled: "{!contasgrid.selection}",
          },
          listeners: {
            tap: "openEditButtonTap",
          },
        },
        {
          xtype: "button",
          ui: "decline",
          text: "Excluir",
          tooltip: "Clique para Excluir um Registro",
          bind: {
            hidden: "{!contasgrid.selection}",
          },
          listeners: {
            tap: "openDelButtonTap",
          },
        }, {
          xtype: 'spacer',
          flex: 1,
        }, {
          xtype: 'button',
          text: 'Exportar',
          iconCls: 'x-fa fa-file-excell',
          handler: 'onExportButtonTap'
        }

      ],
    },
  ],

  columns: [
    {
      text: "Vencimento",
      dataIndex: "data_vencimento",
      formatter: 'date("d/m/Y")',
      align: "center",
      width: 110,
    },
    {
      text: "Categoria",
      dataIndex: "categorias_descricao",
      width: 130,
    },
    {
      text: "Descrição",
      dataIndex: "descricao",
      flex: 1,
    },
    {
      text: "Fornecedor",
      dataIndex: "fornecedor_nome",
      width: 130,
    },
    {
      text: "Valor Previsto",
      dataIndex: "valor",
      formatter: 'brMoney',
      align: "right",
      width: 120,
    },
    {
      text: "Valor Pago",
      dataIndex: "valor_pago",
      formatter: 'brMoney',
      align: "right",
      width: 120,
    },
    {
      hidden: true,
      text: "Valor do Pagamento",
      dataIndex: "data_pagamento",
      formatter: 'date("d/m/Y")',
      align: "center",
      width: 110,
    },
    {
      text: "Status",
      width: 120,
      align: 'center',
      exportRenderer: true,
      renderer: function (value, record, dataIndex, cell, column) {
        if (record.get('valor_pago') && record.get('data_pagamento')) {
          return 'Pago';

        } else {
          return 'Aberto'
        };

      }
      // renderer: function (value, record, dataIndex, cell, column) {
      //   if (record.get('valor_pago') && record.get('data_pagamento')) {
      //     cell.addCls('text-green');
      //     return 'Pago';
      //   } else {
      //     if (record.get('data_vencimento').getTime() < new Date()) {
      //       cell.addCls('text-red');
      //     }
      //     return 'Aberto'
      //   };

      // }
    },
  ],
});
