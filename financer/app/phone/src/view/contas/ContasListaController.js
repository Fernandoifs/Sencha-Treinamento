Ext.define('Financer.view.contas.ContasListaController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.contaslistacontroller',

    requires: [
        'Ext.Toast'
    ],
    
    onExcluirSwiperHandler: function (list, info) {
        Ext.Msg.confirm('Confirmação', 'Deseja excluir o registro?', function (option) {
            if (option === 'yes') {
                info.record.erase({
                    callback: function (record) {
                        Ext.toast('Registro excluído com sucesso');
                    }
                })
            }
        })
    }

});