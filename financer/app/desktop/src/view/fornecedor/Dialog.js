Ext.define("Financer.view.fornecedor.Dialog", {
  extend: "Ext.Dialog",
  
  layout: "fit",
  width: 900,
  height: 550,
  title: "Cadastro de Fornecedores",
  closable: true,
  maximizable: true,

  items: [
    {
      xtype: "fornecedorform",
    }, {
      xtype: "toolbar",
      docked: "bottom",
      layout: {
        layout: "hbox",
        pack: "end",
      },

      items: [
        {
          xtype: "button",
          text: "Salvar",
        }]
    }]

});
