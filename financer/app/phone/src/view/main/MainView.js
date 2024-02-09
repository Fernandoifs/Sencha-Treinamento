Ext.define('Financer.view.main.MainView', {
  extend: 'Ext.Container',
  alias: 'widget.mainview',
  id: 'main_view',
  controller: 'mainviewcontroller',

  initialize: function () {
    Ext.Viewport.setMenu({
      xtype: 'menuview'
    }, {
      side: 'left',
      cover: true
    })
  },
  config: {
    layout: { type: 'card' },

    items: [{
      xtype: 'toolbar',
      reference: 'maintoolbar',
      id: 'main_toolbar',
      docked: 'top',
      title: 'Home',

      items: [{
        xtype: 'button',
        iconCls: 'x-fa fa-bars',
        margin: 0,
        handler: function () {
          Ext.Viewport.toggleMenu('left')
        }
      }]
    }]
  }

})
