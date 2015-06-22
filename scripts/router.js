/**
 * Created by firewaterjoe on 6/18/15.
 */
import  {MenuView,MenuItemView} from './views/MenuItemView'
import {MenuItemModel, MenuItemCollection} from './models/MenuItemModel';
import MenuItemsView from './views/MenuItemsView';
import OrdersView from './views/OrdersView'
import {OrdersCollection} from './models/OrderModel';
import CategoriesView from './views/CategoriesView';
import CategoryView from './views/CategoryView';
import PopularView from './views/PopularView'
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
            $('.menu').html(new PopularView({

                collection: this.menuItemCollection,
                ordersCollection: this.ordersCollection
            }).el);
             $('.popular').after(new CategoriesView({

                     collection: this.menuItemCollection,
                     ordersCollection: this.ordersCollection
                 }).el);
            $('.order-section').html(new OrdersView({
                collection: this.ordersCollection,
                menuItemCollection: this.menuItemCollection
            }).el)
        }.bind(this));
    }
});

export default new Router();