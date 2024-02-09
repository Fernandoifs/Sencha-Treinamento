Ext.define('Financer.view.home.Main', {
    extend: 'Ext.Container',
    alias: 'widget.homeview',

    scrollable: true,

    items: [{
        xtype: 'categoriasgrafico',
        shadow: true,
        margin: 15,
        height: 350
    }, {
        xtype: 'cartesian',
        shadow: true,
        margin: 15,
        height: 400

    }]
});