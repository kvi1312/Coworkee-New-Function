Ext.define('App.view.music.ShowController', {
    extend:'App.view.widgets.ShowController',
    alias: 'controller.musicshow',

    doAction : function (type){
        this.fireEvent('actionexec', type, this.getRecord(), true);
    },

    onRecordChange: function (view, record){
        var viewModel = this.getViewModel(),

            history = viewModel.getStore('history')

            if(record){
                history.filter('recipient_id', record.get('id'));
            }else{
                history.removeAll();
            }
            this.callParent(arguments)
    }
})