Ext.define('App.store.Music', {
    extend:"Ext.data.Store",
    alias: 'store.music',

    model: 'App.model.Music',
    remoteFilter: true,
    remoteSort: true,
    sorters: 'name',
})


//getdata for list
// var musicStores = Ext.create("Ext.data.Store", {
//     remoteFilter: false,
//     model: "Music",
//     storeId: "Music",
//     gridId: "musicGridView",
//     sorters: [
//       {
//         property: "name",
//         direction: "ASC",
//       },
//     ],
//     pageSize: 12,
//     // // proxy: HttpProxy.create({ url: "music/list" }),
//     listeners: {
//       refresh: function (store) {
//         var gridView = Ext.ComponentQuery.query("#musicGridView")[0];
//         if (store.count() && gridView && !gridView.getSelection()) {
//           gridView.setSelection(store.getAt(0));
//         }
//       },
//     },
//   });
  
//   //get data for cbox
//   var musicComboboxStores = Ext.create("Ext.data.Store", {
//     remoteFilter: false,
//     model: "Music",
//     storeId: "MusicCombobox",
//     sorters: [
//       {
//         property: "name",
//         direction: "ASC",
//       },
//     ],
//     pageSize: 12,
//     // proxy: HttpProxy.create({ url: 'music/listcombobox' })
  
//   });
  