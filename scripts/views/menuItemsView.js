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
      this.renderChildren();
    },
    renderChildren: function(){
        _.invoke(this.children || [], 'remove');
        console.log('1',this.collection);
        this.children = this.collection.map(function(child) {
            console.log('2',child);
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