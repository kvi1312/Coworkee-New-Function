Ext.define('App.view.music.WizardController', {
    extend: 'App.view.widgets.WizardController',
    alias: 'controller.musicwizard',

    control: {
        '#': {
            reset: 'refresh'
        }
    },

    refresh : function (){
        var viewModel = this.getViewModel()
        viewModel.getStore('music').reload();
    },

    onNameFieldsBlur: function () {
        var viewModel = this.getViewModel()
        record = viewModel.get('record'),
        name = record.get('name'),
        author = record.get('author')
        link = record.get('link'),
        active = record.get('active'),
        description = record.get('description')

        if(Ext.isEmpty(name) || Ext.isEmpty(link) || Ext.isEmpty(author)){
            return;
        }
    }
})