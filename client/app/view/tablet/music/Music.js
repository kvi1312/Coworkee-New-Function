
Ext.define('App.view.tablet.music.Music', {
    extend: 'App.view.music.Music',
    requires: [
        'Ext.plugin.ListPaging',
    ],
    controller: 'tablet-musicbrowse',

    tbar: {
        xtype: 'musicbrowsetoolbar'
    },
    items: [
        {
            xtype: 'grid',
            bind: '{music}',
            storeId:'music',
            columns: [
                {text: 'Name', dataIndex: 'Name', flex: 1, cell: {encodeHtml: false} , tpl: '<a class="{Id}" href="localhost:5001/music/detail/{Id}">{Name}</a>'},
                {text: 'Author', dataIndex: 'Author', flex: 1},
                {text: 'Link', dataIndex: 'Link', flex: 1},
                {text: 'Active', dataIndex: 'Active', flex: 1},
                {text: 'Description', dataIndex: 'Description', flex: 1},
                // {text: 'Edit', id:'edit', minWidth:100, flex: 0.5, cell: {encodeHtml: false}, tpl: '<a href="localhost:5001/music/detail/{Id}><i class= "fa fa-pen"></i></a>'},
                // {text: 'Remove',minWidth:100, flex: 0.5, cell: {encodeHtml: false}, tpl: '<a><i class= "far fa-remove"></i></a>'},
                // {
                    
                //     text: "EDIT",
                //     align: "center",
                //     stopSelection: true,
                //     // xtype: 'widget',
                //     widget: {
                //         xtype: 'button',
                //         text: "Edit",
                //         bind: null,
                //         handler: function(widgetcolumn){
                //             var record = widgetcolumn.getWidgetRecord();
                //             console.log("got data!", record);
                //         },
                //         listeners: {
                //             beforerender: function(widgetColumn){
                //                 var record = widgetColumn.getWidgetRecord();
                //                 widgetColumn.setText( widgetColumn._btnText ); //can be mixed with the row data if needed
                //             }
                //         }
                //     }
                // }
                { 
                  
                    text: "ACTION",

                    items: [
                    {
                        text: 'Edit',
                        flex: 2,
                        
                        handler: function(grid, rowIndex, colIndex) {
                            var rec = grid.getStore().getAt(rowIndex);
                            alert("Edit " + rec.get('Name'));
                         return {tpl: '<a href="#"><i class= "fa fa-pen">aa</i></a>'}
                        }
                    },
                    {
                        
                        icon: 'x-fa fa-cog',
                        tooltip: 'Delete',
                        handler: function(grid, rowIndex, colIndex) {
                            var rec = grid.getStore().getAt(rowIndex);
                            alert("Terminate " + rec.get('firstname'));
                        }
                    }]
                }
            ]
        }
    ]
})


//                 {
//                     id: 'edit_music',
//                     align: "right",
//                     dataIndex: 'edit_music',
//                     flex: 1,
//                     cell: {
//                         encodeHtml: false
//                     },
//                     tpl: [
//                         '<button class="x-icon-el x-font-icon far fa-pen"></button>',         
//                     ],
//                     // listeners: {
//                     //     boxready: 'musicbrowse',
//                     //     click: 'onEdit'
//                     //   }
//                     itemId: 'onEdit'
//                 },
//                 {
//                     id: 'delete_music',
//                     align: "left",
//                     dataIndex: 'delete_music',
//                     flex: 1,
//                     cell: {
//                         encodeHtml: false
//                     },
//                     tpl: [
//                         '<button class="far fa-trash"></button>',         
//                     ],
//                     listener: {
//                         click: function(){
//                             console.log();
//                         }
//                     }
//                 },
//             ],

// {
//     text: 'Action',
//     dataIndex: 'action',
//     id: 'action-column-music',
//     align: "center",
//     flex: 0.5,
//     cell: {
//         encodeHtml: false,
//     },
//     columns: [ 
//         {
//             id: 'edit_music',
//             align: "right",
//             dataIndex: 'edit_music',
//             flex: 1,
//             cell: {
//             encodeHtml: false,
//             tpl: '<button class="x-icon-el x-font-icon far fa-pen"></button>'  
//         },
     
//     ]
// },