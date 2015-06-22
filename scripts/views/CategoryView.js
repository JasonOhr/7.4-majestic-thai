/**
 * Created by firewaterjoe on 6/19/15.
 */
import {MenuItemView} from './MenuItemView'
export default Backbone.View.extend({
    template: JST.categories,
    events: {
        'click .category-title': 'hideItems'
    },
    initialize: function(options){
        this.category = options.category;
        this.ordersCollection = options.ordersCollection;
        this.render();
        //console.log(options);
    },
    render: function(){
        //console.log('duh',this.categories);
        this.$el.html(JST['categories']({
            'category':this.category
        }));
        this.renderChildren();
    },renderChildren: function(){
        _.invoke(this.children || [], 'remove');

        this.children = this.collection.map(function(child) {

            var view = new MenuItemView({
                model: child,
                ordersCollection:this.ordersCollection
            });
            this.$el.append(view.el);
            //  console.log(view);
            return view;
        }.bind(this));

        return this;
    },

    remove: function(){
        _.invoke(this.children || [], 'remove');
        Backbone.View.prototype.remove.apply(this, arguments);
    },
    hideItems: function(){
        this.$('.menu-item, p.category-description').toggleClass('hidden');
    }



});