Ext.define('App.view.music.ShowTools', {
    extend: 'Ext.Container',
    xtype: 'musicshowtools',

    mixins: [
        'Ext.mixin.Responsive'
    ],

    cls: 'music-tools',

    layout: {
        type: 'box',
        align: 'center'
    },

    responsiveConfig: {
        'width < 600':{
            layout: {
                vertical: true
            }
        },
        'width > 599': {
            layout: {
                vertical: true
            }
        }
    },
    items: [
        {
            bind: {
                record: '{record}'
            }
        }
    ]
})