Ext.define("Financer.view.categorias.MainViewModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.categoriasview",
  
    stores: {
      categorias: {
        model: "Financer.model.Categorias", //onde estara o store
        autoLoad: true,
      }
    }
  });