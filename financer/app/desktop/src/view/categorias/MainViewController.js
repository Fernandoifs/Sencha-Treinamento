Ext.define('Financer.view.categorias.MainViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.categoriasmainview',

  onNovoButtonTap: function(button){
    var me = this,
    grid = me.lookup('categoriasgrid'),
    record = grid.getStore.insert(0,{});

    grid.findPlugin('rowedit').startEdit(record[0]);
  }

  
});
