Ext.define('App.view.music.MusicController', {
    extend: 'App.view.widgets.BrowseController',
    alias: 'controller.musicbrowse',
    storeName: 'Music',
    control: {
        "#": {
            reset: 'refresh'
        }
    },

    refresh: function () {
        var me = this.getViewModel();
        me.getStore('music').reload();
    },

    onCreate: function() {
        this.redirectTo('music/create')
    },

    onEdit: function (id){
        var form = this.getView();
        console.log(form);
    },

    onDelete: function(id){
        return this.redirectTo(`https://localhost:5001/music/delete/${id}`)
    }
})