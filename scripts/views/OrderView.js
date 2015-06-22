/**
 * Created by firewaterjoe on 6/18/15.
 */
export default Backbone.View.extend({
   template: JST.orderSummary,
    events: {
      'click .remove-item': 'removeItem'
    },
    initialize: function(){
        //this.collection = options.collection;
        this.render();
    },
    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
    },
    removeItem: function(){
        this.collection.remove(this.model);
    }
});