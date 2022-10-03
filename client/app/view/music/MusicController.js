Ext.define('App.view.music.MusicController', {
    extend: 'App.view.widgets.BrowseController',
    alias: 'controller.musicbrowse',


    control: {
        "#": {
            reset: 'refesh'
        }
    },

    refresh: function () {
        var me = this.getViewModel();
        me.getStore('musics').reload();
    },

    onCreate: function() {
        this.redirectTo('music/create')
    },

    // onUpdate: () => {
    //     this.redirectTo('music/update')
    // }
})