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
        viewModel.getStore('musics').reload();
    },

    onNameFieldsBlur: function () {
        var viewModel = this.getViewModel()
        record = viewModel.get('record'),
        name = record.get('name'),
        link = record.get('link'),
        author = record.get('author')
        description = record.get('description')

        if(Ext.isEmpty(name) || Ext.isEmpty(link) || Ext.isEmpty(author)){
            return;
        }
    }
})