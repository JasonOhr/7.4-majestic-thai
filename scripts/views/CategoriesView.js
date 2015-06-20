/**
 * Created by firewaterjoe on 6/19/15.
 */
import {MenuItemsView} from './MenuItemsView'
export default Backbone.View.extend({
    template: JST.categories,
    initialize: function(options){
        this.ordersCollection = options.ordersCollection;
        this.render();
    },
    render: function(){

        _.each(this.collection.groupBy('category'),function(items,category){
            if(category!== undefined){

            this.renderCategories(category,items);
            }
        }.bind(this));

    },
    renderCategories: function(category,items){
        //console.log('there',category,items);
        this.$el.append(JST['categories']({
            'category' : category
        }));
        this.collection = new Backbone.Collection(items);
        this.renderChildren();
    },
    renderChildren: function(){
        _.invoke(this.children || [], 'remove');
        console.log('items',this.collection);
        this.children = this.collection.map(function(child) {
            var view = new MenuItemsView({
                model: child,
                ordersCollection:this.ordersCollection
            });
            this.$('.category-description').append(view.el);
            return view;
        }.bind(this));

        return this;
    },

    remove: function(){
        _.invoke(this.children || [], 'remove');
        Backbone.View.prototype.remove.apply(this, arguments);

    }

});