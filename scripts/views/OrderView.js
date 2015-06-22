/**
 * Created by firewaterjoe on 6/18/15.
 */
export default Backbone.View.extend({
   template: JST.orderSummary,
    events: {
      'click .remove-item': 'removeItem'
    },
    initialize: function(options){
        //this.collection = options.collection;
        console.log('oderV ',options);
        this.listenTo(this.collection, "update", this.subTotal);
        this.render();
    },
    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
    },
    subTotal: function(){
        console.log('subtotal',this.collection.subtotal);
        //console.log(this.model);
        //this.render();
        //console.log(this.collection);
        $('.subtotal-line').html(JST['orderSubtotal'](this.collection ));
        this.render();


    },
    removeItem: function(){
        console.log(this.model,this.collection);
        this.collection.remove(this.model);

    }
});