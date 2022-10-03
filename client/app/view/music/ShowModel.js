Ext.define('App.view.music.ShowModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.musicshow',

    stores: {
        markers: {},

        history: {
            type: 'actions',
            pageSize: 12
        }
    }
})