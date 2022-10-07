Ext.define('App.store.Music', {
    extend:"Ext.data.Store",
    alias: 'store.music',
    autoLoad: true,
    model: 'App.model.Music',
    remoteFilter: true,
    remoteSort: true,
    sorters: 'name',

  proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'data',
        },
        url: 'https://localhost:5001/music/'
    },
})
