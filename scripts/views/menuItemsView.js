/**
 * Created by firewaterjoe on 6/18/15.
 */
import {MenuItemView} from './MenuItemView'
export default Backbone.View.extend({
    initialize: function(options){
        this.ordersCollection = options.ordersCollection;
      this.render();
    },
    render: function(){
        console.log('here',this.collection.each(groupBy('category')));
      this.renderChildren();
    },
    renderChildren: function(){
        _.invoke(this.children || [], 'remove');

        this.children = this.collection.map(function(child) {
            var view = new MenuItemView({
                model: child,
                ordersCollection:this.ordersCollection
            });
            this.$el.append(view.el);
            return view;
        }.bind(this));

        return this;
    },

    remove: function(){
        _.invoke(this.children || [], 'remove');
        Backbone.View.prototype.remove.apply(this, arguments);
    }
});