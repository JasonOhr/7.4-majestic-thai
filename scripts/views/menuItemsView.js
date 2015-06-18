/**
 * Created by firewaterjoe on 6/18/15.
 */
import {MenuItemView} from './MenuItemView'
export default Backbone.View.extend({
    initialize: function(){
      this.render();
    },
    render: function(){
      this.renderChildren();
    },
    renderChildren: function(){
        _.invoke(this.children || [], 'remove');

        this.children = this.collection.map(function(child) {
            var view = new MenuItemView({
                model: child
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