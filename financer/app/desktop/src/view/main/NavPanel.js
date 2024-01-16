Ext.define('Financer.view.main.NavPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.navpanel',
    title: 'Financer 1.0',

    layout: 'fit',
    shadow: true,
    margin: '0 5 0 0',

    items: [{
        xtype: 'menulist',
        reference: 'menulist',
        listeners: {
            selectionchange: 'onMenuSelectionChange'
        }
    }]
});