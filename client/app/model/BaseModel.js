// // http://docs.sencha.com/extjs/latest/guides/core_concepts/data_package.html
// Ext.define('App.model.BaseModel', {
//     extend: 'Ext.data.Model',

//     fields: [
//         // Calculated fields
//         // https://docs.sencha.com/extjs/latest/modern/Ext.data.field.Field.html#cfg-calculate
//         { name: 'url', calculate: function (data) {
//             var index = this.owner.entityName.lastIndexOf("Model");
//             return Ext.String.format('{0:lowercase}/{1}',
//                 this.owner.entityName.substr(0,index),
//                 data.id);
//         }},
//         { name: 'editUrl', calculate: function (data) {
//             var index = this.owner.entityName.lastIndexOf("Model");
//             return Ext.String.format('{0:lowercase}/{1}/edit',
//                 this.owner.entityName.substr(0,index),
//                 data.id);
//         }},
//         { name: 'detailUrl', calculate: function (data) {
//             var index = this.owner.entityName.lastIndexOf("Model");
//             return Ext.String.format('{0:lowercase}/{1}',
//                 this.owner.entityName.substr(0,index),
//                 data.id);
//         }},
//         { name : 'id', type: 'string' },
//         { name : 'created', type : 'date'},
//         { name : 'lastUpdated', type : 'date'},
//         { name : 'created_By', type : 'string'},
//         { name : 'lastUpdateBy', type : 'string'},
//         {
//             name: 'createdAt',
//             type: 'string',
//             convert: function (value) {
//                 return CommonFunctions.formatDateOfTimeZoneSupport(value, CommonFunctions.getShortFormatDateTime())
//             }
//         },
//         {
//             name: 'updatedAt',
//             type: 'string',
//             convert: function (value) {
//                 return CommonFunctions.formatDateOfTimeZoneSupport(value, CommonFunctions.getShortFormatDateTime())
//             }
//         },
//         {
//             name: 'updatedBy',
//             type: 'string',
//         },
//         {
//             name: 'createdBy',
//             type: 'string',
//         },
//         {
//             name: 'updatedByName',
//             type: 'string',
//         },
//         {
//             name: 'createdByName',
//             type: 'string',
//         },
//     ],

//     schema: {
//         namespace: 'App.model'
//     },

//     toUrl: function() {
//         return this.get('url');
//     },

//     toEditUrl: function() {
//         return this.toUrl() + '/edit';
//     }
// });
