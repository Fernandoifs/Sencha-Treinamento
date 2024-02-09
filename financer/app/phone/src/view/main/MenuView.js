Ext.define('Financer.view.main.MenuView', {
    extend: 'Ext.Sheet',
    alias: 'widget.menuview',
    layout: 'vbox',
    width: 180,

    controller: 'mainviewcontroller',

    items: [{
        xtype: 'image',
        src: 'resources/shared/images/logo.ico',
        height: 50
    }, {
        xtype: 'container',
        layout: 'vbox',
        flex: 1,
        defaults: {
            xtype: 'button',
            handler: 'onMenuClick'
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