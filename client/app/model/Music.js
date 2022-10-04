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
    },
    
    statics: {
        load: function (id , options, session){
        var record = Ext.create('App.model.Music')
        record.setSession(session)
        record.load(
        Ext.apply({params: {id: id}}, options)
    )
        }
    }
})