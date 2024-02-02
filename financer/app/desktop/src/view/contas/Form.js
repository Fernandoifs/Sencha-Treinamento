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
      layout: {
        type: "vbox",
      },
      items: [
        {
          xtype: "fieldcontainer",
          items: [
            {
              xtype: "combobox",
              label: "Categorias",
              margin: "0 5 0 0",
              flex: 2,
              valueField: 'id',
              displayField: 'descricao',
              store:
              {
                model: Financer.model.Contas
              }
            },
            {
              xtype: "datefield",
              label: "Vencimento",
              flex: 1,
            }]
        }]
    }]
});
