Ext.define('App.view.music.MusicModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.musicbrowse',

    stores: {
        musics: {
            type: 'musics',
            grouper: {
                groupFn: function (record) {
                    return record.get('name')[0];
                }
            }
        },
        
    }
})