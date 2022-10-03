Ext.define('App.view.tablet.music.MusicController', {
    extend: 'App.view.music.MusicController',
    alias: 'controller.tablet-musicbrowse',
    
    onCreate: function() {
        Ext.create({
            xtype: 'musiccreate',
            record: Ext.create('App.model.Music'),
            centered: true,
            floated: true,
            modal: true,
            ui: 'dialog',
            toolbar: {
                docked: 'bottom'
            }
        }).show();
    }
})
