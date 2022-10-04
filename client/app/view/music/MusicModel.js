Ext.define('App.view.music.MusicModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.musicbrowse',

    stores: {
        music: {
            type: 'music',
            grouper: {
                groupFn: function (record) {
                    return record.get('name')[0];
                }
            }
        },
        
    }
})