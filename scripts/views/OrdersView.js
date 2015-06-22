/**
 * Created by firewaterjoe on 6/19/15.
 */
import OrderView from './OrderView'
export default Backbone.View.extend({
    template: JST.orderSubtotal,
   initialize: function(){
       this.listenTo(this.collection, 'update',this.render);
       //console.log('try orderV: ',options);
       this.render();
   },
    render: function(){
        this.$el.html(this.template());
        this.renderChildren();
    },
    renderChildren: function(){


        _.invoke(this.children || [], 'remove');
        console.log('in renderC(): ',this.collection);
        console.log('these children',this.children);
        this.children = this.collection.map(function(child){
            console.log("in Map: ",child);
            var view = new OrderView({
                model: child,
                collection: this.collection
            });
            this.$('.order-item-line').append(view.el);
            return view;
        }.bind(this));
        return this;
    },
    remove: function(){
        _.invoke(this.children || [], 'remove');
        Backbone.View.prototype.remove.apply(this,arguments);
    }
});