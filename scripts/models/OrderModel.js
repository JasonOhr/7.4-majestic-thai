/**
 * Created by firewaterjoe on 6/18/15.
 */
var OrderModel = Backbone.Model.extend({
    defaults: {
        price: null,
        name: "",
        description: ""
    }
});

var OrdersCollection = Backbone.Collection.extend({
    model: OrderModel,

    initialize: function(){
        this.listenTo(this, "update", this.findSubtotal);
        this.subtotal = 0;

    },
    findSubtotal: function(){
        this.subtotal = this.reduce(function(currVal,currModel){
            return currVal + currModel.get('price');
        }, 0);
        return this.subtotal
    }
});

export default {OrderModel, OrdersCollection}