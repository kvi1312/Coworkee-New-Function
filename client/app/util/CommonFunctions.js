Ext.define('CommonFuntions', {
    singleton: true,
    
    formatDateOfTimeZoneSupport: function (date, format = null) {
        var me = this;
        if (!me.isNullOrEmpty(date)) {
          if (format != null) {
            return Ext.Date.format(new Date(date), format);
          } else {
            // return new Date();
            return Ext.Date.format(new Date(date), me.getFormatDateTime());
          }
        } else {
          return new Date();
        }
      },

      getCurrentYear: function () {
        var date = new Date();
        return date.getFullYear().toString();
      },

      formatTimeOfTimeZoneSupport: function (date) {
        return Ext.Date.format(new Date(date), this.getFormatTime());
      },

      addActionButton: function (icon, id, tooltip, obj) {
        var clsName = icon;
        switch (icon) {
          case 'deactive':
            icon = 'fas fa-times-octagon icon-deactive';
            tooltip = Translate.translate('UI.DeActive', false);
            id = 'DeactiveAction';
            break;
          case 'active':
            icon = 'far fa-check-circle icon-active';
            tooltip = Translate.translate('UI.Active', false);
            id = 'ActiveAction';
            break;
          case 'delete': //Permanently Delete
            icon = 'fas fa-trash';
            tooltip = Translate.translate('UI.PermanentlyDelete', false);
            id = 'DeleteAction';
            break;
          case 'edit':
            icon = 'far fa-edit';
            tooltip = Translate.translate('UI.Edit', false);
            id = 'EditAction';
            break;
          case 'help':
            icon = 'fa fa-question-circle';
            if (CommonFunctions.isNullOrEmpty(tooltip)) {
              return '&nbsp;&nbsp;';
            } else {
              if (CommonFunctions.isPhone() && obj && obj.el && typeof obj.el.on === 'function') {
                obj.el.on({
                  mousedown: function () {
                    var tip = new Ext.tip.ToolTip({
                      target: id,
                      html: tooltip,
                      dismissDelay: 2000,
                      showDelay: 0,
                      hideDelay: 2000,
                      autoHide: true,
                    });
                    tip.show();
                  },
                });
              }
              return ('<a class="class-delete" id="' + id + '"><i class="' + icon + ' cursor-button"></i></a>');
            }
          case 'restore':
            icon = 'fas fa-trash-restore';
            tooltip = Translate.translate('UI.Restore', false);
            id = 'RestoreAction';
            break;
          case 'softDelete':
            icon = 'fad fa-trash';
            tooltip = Translate.translate('UI.SoftDelete', false);
            id = 'SoftDeleteAction';
            break;
          case 'hardDelete':
            icon = 'fas fa-trash-alt';
            tooltip = Translate.translate('UI.HardDelete', false);
            id = 'HardDeleteAction';
            break;
          case 'detailAction':
            icon = 'far fa-edit';
            tooltip = Translate.translate('UI.Action', false);
            id = 'DetailAction';
            break;
          default:
            break;
        }
    
        // Change to random + to make it more random
        id = id + this.getRandomString(1000) + Ext.Number.randomInt(0, 10000) + this.getRandomString(1000) + Ext.Number.randomInt(0, 10000);
    
        setTimeout(() => {
          this.showTooltip(id, tooltip);
        }, 0);
    
        return ('<a class="class-delete icon-' + clsName + '" id="' + id + '"><i class="' + icon + ' cursor-button"></i></a>');
      },
})