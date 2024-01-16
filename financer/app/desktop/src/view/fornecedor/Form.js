Ext.define("Financer.view.fornecedor.Form", {
  extend: "Ext.form.Panel",
  alias: "widget.fornecedorform",

  items: [
    { xtype: "textfield", label: "Nome" },
    {xtype: "fieldcontainer",
      default: {
        flex: 1,
      },

      items: [
        { xtype: "textfield", label: "Telefone", margin: '0 5 0 0' },
        { xtype: "textfield", label: "Email" },
      ],

    },
  ],
  
});
