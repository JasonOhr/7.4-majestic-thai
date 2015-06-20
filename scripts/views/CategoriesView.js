/**
 * Created by firewaterjoe on 6/19/15.
 */
import {MenuItemsView} from './MenuItemsView'
export default Backbone.View.extend({
    template: JST.categories,
    initialize: function(){

        this.render();
    },
    render: function(){
        //this.renderChildren();
        //console.log(this.collection);
        _.each(this.collection.groupBy('category'),function(items,category){
            if(category!== undefined){

            this.renderCategories(category,items);
            }
        }.bind(this));
        this.renderCategories()
    },
    renderCategories: function(category,items){
        console.log('there',category,items);
        this.$el.append(JST['categories']({
            'category' : category
        }));
        this.renderChildren(items)
    },
    renderChildren: function(items){
        _.invoke(this.children || [], 'remove');
        console.log('items',items);
        this.children = items.map(function(child) {
            console.log(child);
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