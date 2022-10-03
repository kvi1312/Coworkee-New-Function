Ext.define('App.view.tablet.music.MusicToolbar', {
    extend: 'App.view.widgets.BrowseToolbar',
    
    items: {
        create: {
            xtype: 'button',
            iconCls: 'x-fa fa-plus',
            handler: 'onCreate',
            text: 'Create',
            weight: 70
        }
    }
})