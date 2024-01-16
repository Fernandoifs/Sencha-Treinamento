Ext.define('Financer.view.main.MainViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.mainviewcontroller',


  routes: {
    ':xtype': {
      action: 'mainRoute'
    }
  },

  mainRoute: function (xtype) {
    console.log('MainRoute - Procurar pelo componente => ' + xtype);
    // procurar a view e exibir no center

    var centerView = this.lookup('centerview'),
      navigationview = this.lookup('navegationview'),
      menulist = this.lookup('menulist'),
      exists = Ext.ClassManager.getByAlias('widget.' + xtype),
      node;

    // verificar se a classe existe
    if (exists === undefined) {
      console.log(xtype + ' não encontrada')
      return;
    };

    // verificar se a store carregou
    if (!menulist.getStore()) {
      console.log('Não existe store para o menu')
      return;
    };

    node = menulist.getStore().findNode('xtype', xtype);

    if (node == null) {
      console.log('Não existe rota para ' + xtype)
      return;
    };

    if (!centerView.getComponent(xtype)) {
      centerView.add({
        xtype: xtype,
        itemId: xtype
      })
    };

    centerView.setActiveItem(xtype);
    menulist.setSelection(node);

  },

  onMenuSelectionChange: function (tree, node) {
    console.log('O menu foi selecionado! ' + node.get('text'));

    this.redirectTo(node.get('xtype'));
  }

});
