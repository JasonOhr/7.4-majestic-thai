/**
 * Created by firewaterjoe on 6/18/15.
 */
var OrderModel = Backbone.Model.extend({

});

var OrdersCollection = Backbone.Collection.extend({
    model: OrderModel
});

export default {OrderModel, OrdersCollection}