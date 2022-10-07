Ext.define('App.view.music.Show', {
    extend: 'App.view.widgets.Show',
    xtype: 'musicshow',

    controller: 'musicshow',
    viewModel: {
        type: 'musicshow'
    },
    // url: 'http://localhost:5001/api/music/list',
    // Method: 'GET',
    title: 'Music',


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