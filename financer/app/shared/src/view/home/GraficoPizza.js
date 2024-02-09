Ext.define('Financer.view.home.GraficoPizza', {
    extend: 'Ext.chart.PolarChart',
    alias: 'widget.categoriasgrafico',

    requires: [
        'Ext.chart.series.Pie',
        'Ext.chart.interactions.Rotate',
        'Ext.chart.interactions.ItemHighlight'
    ],
    store: {
        autoLoad: true,
        fields: ['descricao', 'total'],
        proxy: {
            type: 'ajax',
            url: '/resources/desktop/categorias.json',
            reader: {
                rootProperty: 'data'
            }
        }
    },
    // legend: { //dando pau na legenda não sei pq
    //     docked: 'left'
    // },
    series: [{
        type: 'pie',
        xField: 'total',
        radiusField: 'descricao',
        donut: 30,
        label: {
            field: 'descricao',
            display: 'outside'
        }
    }],
    
    interactions: ['rotate', 'itemhighlight'],
    innerPadding: 25

})