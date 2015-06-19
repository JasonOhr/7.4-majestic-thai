/**
 * Created by firewaterjoe on 6/18/15.
 */
import  {MenuView,MenuItemView} from './views/MenuItemView'
import {MenuItemModel, MenuItemCollection} from './models/MenuItemModel';
import MenuItemsView from './views/menuItemsView';
import OrderView from './views/OrderView'
import {OrdersCollection} from './models/OrderModel';
var Router = Backbone.Router.extend({
   routes: {
       '': 'index'
   },
    initialize: function(){
        this.menuItemCollection = new MenuItemCollection();
        this.ordersCollection = new OrdersCollection();
    },
    index: function(){
        $('.container').html(new MenuView().el);

        this.menuItemCollection.fetch().then(function(){

            $('.menu').html(new MenuItemsView({
                collection: this.menuItemCollection,
                ordersCollection: this.ordersCollection
            }).el);
            $('.order-section').html(new OrderView({collection: this.ordersCollection}).el)
        }.bind(this));
    }
});

export default new Router();