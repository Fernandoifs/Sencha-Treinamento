Ext.define('Financer.view.categorias.MainViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.categoriasmainview',

  requires: ['Ext.grid.rowedit.Plugin'],

  onNovoButtonTap: function (button) {
    var me = this,
      grid = me.lookup('categoriasgrid'),
      record = grid.getStore().insert(0, {});

    grid.findPlugin('rowedit').startEdit(record[0]);
  },

  onRowGridEdit: function (grid, location) {

    location.record.save({
      callback: function () {
        Ext.toast('Registros salvo!!', 4000);
      }
    })
  },

  onDeleteToolsHandler: function (grid,location) {
    var me = this,
      grid = me.lookup('categoriasgrid'),
      store = grid.getStore();

    Ext.Msg.confirm('Confirmação', 'Deseja realmente excluir?!', function (option) {
      if (option === 'yes') {
        grid.mask('Excluindo, aguarde...');
        location.record.erase({
          callback: function (batch) {
            grid.unmask();
            Ext.toast("Registro Excluido!", 4000);
            //store.reload();
          }
        })
      }
    })
  }
});
