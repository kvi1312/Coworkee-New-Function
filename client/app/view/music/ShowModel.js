Ext.define('App.view.music.ShowModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.musicshow',

    stores: {
        // Music: musicStores,
        history: {
            type: 'actions',
            pageSize: 12
        }
    }
})