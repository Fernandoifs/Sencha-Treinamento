Ext.define('Financer.view.fornecedor.MainViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.fornecedormainview',

  onNovoButtonTap: function (button) {
    var me = this;
    me.openEditDialog({
      viewModel: {
        data: {
          record: Ext.create('Financer.model.Fornecedor'),
          gridView: me.lookup('fornecedorgrid'),
        },
      },
    });
  },

  openEditButtonTap: function (button) {
    var me = this,
      gridView = me.lookup('fornecedorgrid'),
      selected = gridView.getSelection();

    if (gridView.getSelected().getCount() === 1) {
      me.openEditDialog({
        title: 'Editando Fornecedor',
        viewModel: {
          data: {
            record: selected,
            gridView: me.lookup('fornecedorgrid'),
          },
        },
      });
    } else {
      Ext.Msg.alert('Aviso', 'Selecione apenas um registro!');
    }
  },

  openEditDialog: function (config) {
    var me = this,
      wizardDialog = Ext.create(
        'Financer.view.fornecedor.Dialog',
        Ext.apply({}, config)
      );

    wizardDialog.show();
    return wizardDialog;
  },
});
