Ext.define('App.view.music.Music', {
    extend: 'App.view.widgets.Browse',


    controller: 'musicbrowse',
    viewModel: {
        type: 'musicbrowse'
    },

    cls: 'musicbrowse',
    bind: {
        store: '{musics}'
    }
})

