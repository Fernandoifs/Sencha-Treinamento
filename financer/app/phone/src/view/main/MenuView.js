Ext.define('Financer.view.main.MenuView', {
    extend: 'Ext.Sheet',
    alias: 'widget.menuview',
    layout: 'vbox',
    width: 180,

    items: [{
        xtype: 'image',
        src: 'minhalogo.png',
        height: 180
    }, {
        xtype: 'container',
        layout: 'vbox',
        flex: 1,
        defaults: {
            xtype: 'button',
            handler: 'onMenuclick'
        },
        items: [{
            text: 'Dashboard',
            tag: 'dashboardview'
        }, {
            text: 'Contas a Pagar',
            tag: 'contaslista'
        }]
    }]
})