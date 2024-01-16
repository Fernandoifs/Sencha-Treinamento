Ext.define("Financer.view.fornecedor.MainViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.fornecedormainview",

  onNovoButtonTap: function (button) {
    Ext.create("Financer.view.fornecedor.Dialog").show();
  },
});
