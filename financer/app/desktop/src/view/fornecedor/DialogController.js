Ext.define("Financer.view.fornecedor.DialogController", {
  extend: "Ext.app.ViewController",
  alias: "controller.fornecedordialog",

  requires: ["Ext.Toast"],

  onSaveHandler: function () {
    var me = this,
      form = me.lookup("form"),
      vm = me.getViewModel(),
      dialog = me.getView()
      gridView = vm.get('gridView'),
      record = vm.get("record");

    if (record.isValid()) {
      dialog.mask("Salvando, aguarde...");
      record.save({
        callback: function (record) {
          dialog.unmask;
          if (gridView) {
            gridView.getStore().reload();
            Ext.toast("Registro salvo com sucesso!", 4000);
            dialog.close();
          }
        },
      });
    } else {
      form.validate();
    }
  },
});
