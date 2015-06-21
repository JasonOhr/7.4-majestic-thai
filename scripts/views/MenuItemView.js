/**
 * Created by firewaterjoe on 6/18/15.
 */
import {OrderModel,OrdersCollection} from '../models/OrderModel'

var MenuView = Backbone.View.extend({
    template: JST.menu,
    className: 'menu-page',
    tagName: 'section',

    initialize: function(){

        this.render();
    },
    render: function(){
        this.$el.html(this.template());
    }
});

var MenuItemView = Backbone.View.extend({
    template: JST.menuItem,
    events: {
        'click .menu-item': 'checkIt'
    },
    initialize: function(options){
        console.log(options);
        this.ordersCollection = options.ordersCollection;

        this.render()
    },
    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        console.log('howdy');

    },
    checkIt: function(){
        this.orderModel = new OrderModel();
        this.menuItem = this.model.toJSON();
        //console.log('name',this.menuItem.name);
        //console.log(this.orderModel);
        this.orderModel.set({
            name: this.menuItem.name,
            price: this.menuItem.price
        });
        this.ordersCollection.add(this.orderModel);

        //console.log(this.ordersCollection);

    }

});

export default {MenuView,MenuItemView};