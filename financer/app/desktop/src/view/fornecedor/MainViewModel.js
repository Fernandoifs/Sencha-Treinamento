Ext.define("Financer.view.fornecedor.MainViewModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.fornecedorview",
  
    stores: {
      fornecedores: {
        model: "Financer.model.Fornecedor", //onde estara o store
        autoLoad: true,
      }
    }
  });