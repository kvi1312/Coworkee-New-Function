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

    onEdit: function () {
        this.redirectTo('music/edit')
    }
    
    // onAction: function(record){
    //     if(record.column.id === 'delete_music'){
    //         var form = this.getView()
    //         Ext.Msg.confirm(record.record.data.active ? "Deactive" : "Active", record.record.data.active ? "Confirm Deactive" : "Confirm Active",
    //             function (btn){
    //                 if(btn === 'yes'){
    //                     const config = {
    //                         onSuccess: function(response) {
    //                             if(response.success){
    //                                 Ext.Msg.alert('Notification', 'Change status successfully');
    //                                 CommonFunctions.reloadGrid()
    //                             }
    //                         }
    //                     }
    //                 }
    //         })
    //     }
    // }
})