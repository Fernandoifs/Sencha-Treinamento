Ext.define('Financer.view.main.MainView',  {
  extend: 'Ext.Container',
  xtype: 'mainview',

  controller: 'mainviewcontroller',
  
  viewModel: {
    type: 'mainviewmodel'
  },
  layout: 'fit',
  items: [{
    xtype: 'mainheader',
    docked: 'top',
    reference: 'headerview'
  }, {
    xtype: 'navpanel',
    docked: 'left',
    reference: 'navegationview',
    width: 250,
  }, {
    xtype: 'centercontainer',
    reference: 'centerview',
  }]
})
