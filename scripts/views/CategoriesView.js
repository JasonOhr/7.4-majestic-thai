/**
 * Created by firewaterjoe on 6/19/15.
 */
import {MenuItemView} from './MenuItemView';
import MenuItemsView from './MenuItemsView';
import CategoryView from './CategoryView';
export default Backbone.View.extend({
    //template: JST.categories,
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

            //$('.menu').append(new MenuItemsView({
            //
            //    collection: this.newCollection,
            //    category: category,
            //    ordersCollection: this.ordersCollection
            //}).el);

        }.bind(this));

    }
    //renderCategories: function(category,items){
    //    //console.log('there',category,items);
    //
    //},
    //renderChildren: function(category, items){
    //
    //
    //    this.$el.append(JST['categories']({
    //        'category' : category
    //    }));
    //    console.log('in cat',category);
    //
    //    var newCollection = new Backbone.Collection(items);
    //    _.invoke(this.children || [], 'remove');
    //    //console.log('again',newCollection);
    //    this.children = newCollection.map(function(child) {
    //        console.log(child);
    //        var view = new MenuItemView({
    //            model: child,
    //            ordersCollection:this.ordersCollection
    //        });
    //        //console.log('this',this);
    //        console.log(this.$el);
    //        this.$('.category-description').after(view.el);
    //        return view;
    //    }.bind(this));
    //
    //    return this;
    //},
    //
    //remove: function(){
    //    _.invoke(this.children || [], 'remove');
    //    Backbone.View.prototype.remove.apply(this, arguments);
    //
    //}

});