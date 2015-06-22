/**
 * Created by firewaterjoe on 6/19/15.
 */
import {MenuItemView} from './MenuItemView';
import MenuItemsView from './MenuItemsView';
import CategoryView from './CategoryView';
export default Backbone.View.extend({
    initialize: function(options){
        this.ordersCollection = options.ordersCollection;
        this.render();
    },
    render: function(){

        _.each(this.collection.groupBy('category'),function(items,category){

             this.newCollection = new Backbone.Collection(items);
            this.$el.append(new CategoryView({
                collection: this.newCollection,
                category:category,
                ordersCollection: this.ordersCollection
            }).el);



        }.bind(this));

    }

});