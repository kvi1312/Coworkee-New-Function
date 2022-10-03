Ext.define('App.view.tablet.office.BrowseController', {
    extend: 'App.view.office.BrowseController',
    alias: 'controller.tablet-officebrowse',

    onCreate: function() {

        Ext.create({
            xtype: 'officecreate',
            record: Ext.create('App.model.Office'),
            centered: true,
            floated: true,
            modal: true,
            ui: 'dialog',
            toolbar: {
                docked: 'bottom'
            }
        }).show();
    }
});
