Ext.define('App.view.music.ShowHeader', {
    extend: 'App.view.widgets.ShowHeader',
    xtype:"musicshowheader",

    mixins: [
        'Ext.mixin.Responsive'
    ],

    reponsiveConfig : {
        'width < 600' : {
            layout: {
                vertical: true,
                align: 'center',
                pack: 'center',
            }
        },

        'width > 599': {
            layout: {
                vertical: true,
                align: 'end',
                pack: 'start'
            }
        }
    },

    cls: [
        'show-header',
        'music-header'
    ],

    items: {
        title: {
            tpl: [
                '<div class= "name"><b>{name}</b></div>',
                '<div class ="desc">{author}</div>'
            ]
        }
    }
})