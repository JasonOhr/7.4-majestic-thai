/**
 * Created by firewaterjoe on 6/18/15.
 */
import {MenuItemView} from './MenuItemView'
export default Backbone.View.extend({
    //template: JST.categories,
    initialize: function(options){
        this.ordersCollection = options.ordersCollection;
        this.category = options.category;
        console.log(this.category);
        this.render();
    },
    render: function(){
        //this.$el.append(this.template(this.category));
        this.renderChildren();
    },
    renderChildren: function(){
        _.invoke(this.children || [], 'remove');

        this.children = this.collection.map(function(child) {
            //console.log(child);
            var view = new MenuItemView({
                model: child,
                ordersCollection:this.ordersCollection
            });
            this.$el.append(view.el);
            console.log(view);
            return view;
        }.bind(this));

        return this;
    },

    remove: function(){
        _.invoke(this.children || [], 'remove');
        Backbone.View.prototype.remove.apply(this, arguments);
    }
});