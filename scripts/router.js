/**
 * Created by firewaterjoe on 6/18/15.
 */
import  {MenuView,MenuItemView} from './views/MenuItemView'
import {MenuItemModel, MenuItemCollection} from './models/MenuItemModel';
import MenuItemsView from './views/MenuItemsView'
var Router = Backbone.Router.extend({
   routes: {
       '': 'index'
   },
    initialize: function(){
        this.menuItemCollection = new MenuItemCollection();
    },
    index: function(){


        $('.container').html(new MenuView().el);

        this.menuItemCollection.fetch().then(function(){
            $('.menu').html(new MenuItemsView({collection: this.menuItemCollection}).el);
        }.bind(this));
    }
});

export default new Router();