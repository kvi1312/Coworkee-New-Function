
Ext.define('App.controller.Action', {
    extend: 'Ext.app.Controller',
    
    listen: {
        controller: {
            '*': {
                actionlog: 'log',
                actionexec: 'exec'
            }
        }
    },

    log: function(action, record) {
        Ext.create('App.model.Action', {
            type: action,
            recipient_id: record.getId()
        }).save();
    },

    exec: function(action, record) {
        if (!record) {
            return false;
        }
        switch (action) {
        case 'email':
            record.mailTo();
            break;
        case 'linkedin':
            record.linkedIn();
            break;
        case 'phone':
            record.phoneCall();
            break;
        case 'skype':
            record.skypeCall();
            break;
        default:
            Ext.error('Unknown action: ' + action);
            return false;
        }

        this.log(action, record);
        return true;
    }
});
