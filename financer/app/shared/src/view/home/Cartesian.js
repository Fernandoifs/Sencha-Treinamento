Ext.define('Financer.view.home.Cartesian', {
    extend: 'Ext.chart.CartesianChart',
    alias: 'widget.cartesian',
    requires: [
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Category',
        'Ext.chart.series.Bar',
        'Ext.chart.series.Line'
    ],
    store: {
        autoLoad: true,
        fields: ['mes', 'total_pago', 'total_apagar'],
        proxy: {
            type: 'ajax',
            url: '/resources/desktop/meses.json',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },

        }
    },

    legend: {
        docked: 'bottom'
    },

    axes: [{
        type: 'numeric',
        position: 'left'
    }, {
        type: 'category',
        position: 'bottom'
    }],
    series: [{
        type: 'bar',
        title: 'Contas Pagas',
        xField: 'mes',
        yField: 'total_pago',
    }, {
        type: 'line',
        title: 'Conta a Pagar',
        xField: 'mes',
        yField: 'total_apagar'
    }]
});