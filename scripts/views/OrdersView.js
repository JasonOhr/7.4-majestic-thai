/**
 * Created by firewaterjoe on 6/19/15.
 */
import OrderView from './OrderView'
export default Backbone.View.extend({
    template: JST.orderSubtotal,
   initialize: function(){
       this.listenTo(this.collection, 'update',this.render);
       //this listenTo adds the items to the list
       this.listenTo(this.collection, "update", this.subTotal);
       //this listenTo gets the subtotal from the collection and displays it
       this.render();
   },
    render: function(){
        this.$el.html(this.template());
        this.renderChildren();
    },
    renderChildren: function(){


        _.invoke(this.children || [], 'remove');
        this.children = this.collection.map(function(child){
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
    },
    subTotal: function(){
        $('.subtotal-line').html(JST['subtotalLine'](this.collection ));
        this.renderChildren();
    }
});