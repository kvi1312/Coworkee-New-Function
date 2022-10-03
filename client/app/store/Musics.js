Ext.define('App.store.Musics', {
    extend:"Ext.data.Store",
    alias: 'store.musics',

    model: 'App.model.Music',
    remoteFilter: true,
    remoteSort: true,
    sorters: 'name',
})