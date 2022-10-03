Ext.define('App.model.Music',{
    extend: 'App.model.Base',
    fields: [
        { name: "name", type: "string" },
        { name: "author", type: "string" },
        { name: "link", type: "string" },
        { name: "active", type: "boolean" },
        { name: "description", type: "string" },
      ],

    proxy: {
        api: {
            prefix: 'Server.music'
        }
    }
})