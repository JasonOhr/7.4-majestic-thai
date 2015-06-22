/**
 * Created by firewaterjoe on 6/18/15.
 */
var MenuItemModel = Backbone.Model.extend({

});
var MenuItemCollection = Backbone.Collection.extend({
    url: 'thai.json'
});

export default {MenuItemModel, MenuItemCollection};