Ext.define('App.view.music.ShowDetails', {
    extend: 'Ext.Panel',
    xype: 'musicshowdetails',

    cls : 'music-details',
    title: 'Details',
    
    bind: {
        record: "{record}"
    },

    tpl: [
        '<div class="block-section">',
            '<div class="item">',
                '<div class="label">Song</div>',
                '<div class="value">',
                    '<div>{name}</div>',
                    '<div>{author}, <b>{link}</b></div>',
                '</div>',
            '</div>',
        '</div>'
    ],


})