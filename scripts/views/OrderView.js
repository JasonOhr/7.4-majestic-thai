/**
 * Created by firewaterjoe on 6/18/15.
 */
export default Backbone.View.extend({
   template: JST.orderSubtotal,
    initialize: function(){

        this.listenTo(this.collection, "update", this.subTotal);
        this.render();
    },
    render: function(){
        this.$el.html(this.template(this.collection));
    },
    subTotal: function(){
        //console.log(this.collection.subtotal);
        this.render();
        console.log(this.collection);
        $('.order-item-line').after(JST['orderSummary'](this.collection.toJSON() ));


    }
});