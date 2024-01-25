Ext.define('Financer.view.fornecedor.MainViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.fornecedormainview',

  requires: ["Ext.Toast"],

  onNovoButtonTap: function (button) {
    var me = this;
    me.openEditDialog({
      viewModel: {
        data: {
          record: Ext.create('Financer.model.Fornecedor'),
          grid: me.lookup('fornecedorgrid'),
        },
      },
    });
  },

  openEditButtonTap: function (button) {
    var me = this,
      grid = me.lookup('fornecedorgrid'),
      selecionados = grid.getSelection();

    if (grid.getSelected().getCount() === 1) {
      me.openEditDialog({
        title: 'Editando Fornecedor',
        viewModel: {
          data: {
            record: selecionados,
            grid: me.lookup('fornecedorgrid'),
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

  openDelButtonTap: function (button) {
    var me = this,
      grid = me.lookup('fornecedorgrid'),
      selecionados = grid.getSelected(),
      store = grid.getStore();
      count = selecionados.getCount();

      Ext.Msg.confirm('Confirmação', 'Deseja realmente excluir?!', function (option) {
        if (option === 'yes') {
          grid.mask('Excluindo, aguarde...');
          store.remove(selecionados.items);
          store.sync({
            callback: function (batch) {
              grid.unmask();
              if (batch.complete) {
                Ext.toast("Registro Excluido!", 4000);
                //store.reload();
              } else {
                store.rejectChances();
              }
            }
          })
        }
      })

  }

});
