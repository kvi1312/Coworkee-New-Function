Ext.define('App.view.music.Show', {
    extend: 'App.view.widgets.Show',
    xtype: 'musicshow',

    controller: 'musicshow',
    viewModel: {
        type: 'musicshow'
    },

    title: 'Music',

    // items: {
    //     header: {
    //         items: {
    //             title: {
    //                 tpl: [
    //                     '<div class="x-fa fa-music"></div>',
    //                     '<div class="name">{name}</div>',
    //                     '<div class="desc">Song: {name} - {author}</b><div>'
    //                 ]
    //             }
    //         }
    //     },

    //     content: {
    //         items: {
    //             left: {
    //                 details: {
    //                     xtype: 'musicshowdetails'
    //                 }
    //             }
    //         }
    //     }
    // }

    items: {
        header: {
            xtype: "musicshowheader"
        },

        tools: {
            xtype: "musicshowheader",
            weight: 5,
        },

        content:{
            items: {
                left: {
                    items: {
                        details: {
                            xtype: 'musicshowdetails',
                        }
                    }
                }
            }
        }
    }
})