Ext.define('Financer.view.main.ContasLista', {
    extend: 'Ext.dataview.List',
    alias: 'widget.contaslista',
    requires: [
        'Ext.dataview.plugin.ListPaging',
        'Ext.dataview.listswiper.ListSwiper',
        'Ext.dataview.pullrefresh.PullRefresh'
    ],

    controller: 'contaslistacontroller',

    store: {
        model: 'Financer.model.Contas',
        autoLoad: true,
        pageSize: 10
    },

    plugins: {
        listpaging: {
            autoPaging: true
        },
        listswiper: {
            left: [{
                iconCls: 'x-fa fa-trash',
                ui: 'action',
                text: 'Excluir',
                commit: 'onExcluirSwiperHandler'
            }]
        },
        pullrefresh: true

    },

    itemTpl: new Ext.XTemplate(`
        <div class="testview" style="width: 100%; border: 0px solid green;">
            <table style="width: 100%; border: 0px solid green;">
                <tr>
                    <td style="font-size: 16px;">
                        <div style="..." class="xitem-title">{desctiption}</div>
                        <div style="..." class="xitem-caption">{valor:brMoney()}</div>
                        <div style="..." class="xitem-caption">{data_vencimento:date("d/m/Y")}</div>
                    </td>
                </tr>
            </table>
        </div>
    `)
});
