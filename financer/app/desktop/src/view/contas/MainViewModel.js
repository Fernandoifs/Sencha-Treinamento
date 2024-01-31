Ext.define("Financer.view.contas.MainViewModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.contasviewmodel",
  
    stores: {
      contas: {
        model: "Financer.model.Contas", 
        autoLoad: true,
      }
    }
  });