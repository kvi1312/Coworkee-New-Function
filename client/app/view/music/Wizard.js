Ext.define('App.view.music.Wizard', {
    extend: 'App.view.widgets.Wizard',
    xtype: [
        'musicwizard',
        'musiccreate',
        'musicedit'
    ],

    bind: {
        title: '{record.phantom? "Add" : "Edit"} Music'
    },

    cls: 'music-create',
    screens: [{ 
        title: 'General',
        iconCls: 'x-fa fa-info',
        items: [{
            xtype: 'textfield',
            reference: 'name',
            label: 'Name',
            required: true,
            bind: '{record.name}',
            listeners: {
                blur: 'onNameFieldsBlur'
            }
        },{
            xtype: 'textfield',
            reference: 'author',
            label: 'Author',
            required: true,
            bind: '{record.author}',
            listeners: {
                blur: 'onNameFieldsBlur'
            }
        },{
            xtype: 'textfield',
            reference: 'link',
            label: 'Link',
            required: true,
            bind: '{record.link}',
            listeners: {
                blur: 'onNameFieldsBlur'
            }
        },{
            xtype: "checkboxfield",
            reference: "active",
            name: "active",
            label: "Active",
            // labelCls: "d-flex align-items-center w-auto",
            bind: "{record.active}",
        },{
            xtype: 'textfield',
            reference: 'description',
            label: 'description',
            required: true,
            bind: '{record.description}',
            listeners: {
                blur: 'onNameFieldsBlur'
            }
        },{
            title: 'About',
            iconCls: 'fal fa-address-card',
            items: [{
                xtype: 'textfield',
                label: "RowId",
                labelCls: 'form-label font-weight-bold w-full mb-3px',
                bind: '{record.id}',
                disabled: true,
            },{
                xtype: 'textfield',
                label: "Created",
                labelCls: 'form-label font-weight-bold w-full mb-3px',
                bind: '{record.createdAt || record.created_date}',
                disabled: true,
            },{
                xtype: 'textfield',
                label: "Created By",
                labelCls: 'form-label font-weight-bold w-full mb-3px',
                bind: '{record.createdByName ||record.created_By}',
                disabled: true,
            },{
                xtype: 'textfield',
                label: "Last Updated",
                labelCls: 'form-label font-weight-bold w-full mb-3px',
                bind: '{record.updatedAt || record.last_Updated}',
                disabled: true,
            },{
                xtype: 'textfield',
                label: "Last Updated By",
                labelCls: 'form-label font-weight-bold w-full mb-3px',
                bind: '{record.updatedByName || record.last_Updated_By}',
                disabled: true,
            }]
        }]
    }]
})