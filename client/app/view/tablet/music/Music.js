Ext.define('App.view.tablet.music.Music', {
    extend: 'App.view.music.Music',
    requires: [
        'Ext.plugin.ListPaging'
    ],

    controller: 'tablet-musicbrowse',

    tbar: {
        xtype: 'musicbrowsetoolbar'
    },

    items: [{
        xtype: 'grid',
        emptyText:'No song was found to match your search',
        itemId: "musicGridView",
        bind: '{music}',
        ui: 'listing',
        collapsible: false,
        variableHeights: true,

        selectable: {
            disable:true,
        },

        // plugins: [{
        //     type: 'listpaging',
        //     autoPaging: true
        // }],

        columnMenu: {
            items: {
                groupByThis: false,
                showInGroups: false,
            }
        },

        columns: [{
            text: 'Name',
            dataIndex: 'name',
            flex: 1,
            cell: {
                encodeHtml: false
            },
            tpl: [
                '<a class="item-title" href="#{url}">{name}</a>',           
            ]
        },{
            text: 'Author',
            dataIndex: 'author',
            flex: 1,
            cell: {
                encodeHtml: false
            },
            tpl: [
                '<div class="item-info"><span></span> {author}</div>',         
            ]
        },{
            text: 'Link',
            dataIndex: 'Link',
            flex: 1,
            cell: {
                encodeHtml: false
            },
            tpl: [
                '<div class="item-info"><span></span> {link}</div>',         
            ]
        },{
            text: 'Active',
            dataIndex: 'active',
            flex: 1,
            cell: {
                encodeHtml: false
            },
            tpl: [
                '<div class="item-info"><span></span> {active}</div>',         
            ]
        }, {
            text: 'Description',
            dataIndex: 'description',
            flex: 1,
            cell: {
                encodeHtml: false
            },
            tpl: [
                '<div class="item-info"><span></span> {description}</div>',         
            ]
        },
         {
            text: 'Action',
            align: 'center',
            hideable: false,
            flex: 0.5,
          cls: 'common-action',

            id: 'action-column-music',
            columns: [{
                align: 'right',
                id: 'edit_music',
                iconCls: 'far fa-pen',
                flex: 0.5,
                cell: {
                    encodeHtml: false
                },
                listeners : {
                    click  : 'onEdit'
                }
            },
            {
                align: 'left',
                id: 'delete_music',
                dataIndex: 'active',
                iconCls: 'far fa-trash',

                flex: 0.5,
                cell: {
                    encodeHtml: false
                },
                renderer: 'onRenderActiveButton'
            },
            {
              align: 'left',
              delete: true,
              flex: 0.5,
              cell: {
                  encodeHtml: false
              },
            //   renderer: function (params){
            //       return CommonFunctions.addActionButton('softDelete');
            //   }
            }
            ]}
    ],
    
    listeners: {
        childdoubletap: 'onChildActivate'
    },
    }]
})
