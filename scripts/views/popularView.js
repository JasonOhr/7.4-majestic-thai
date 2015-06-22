/**
 * Created by firewaterjoe on 6/21/15.
 */
export default Backbone.View.extend({
    template:JST.popularItems,
    initialize: function(options){
        this.ordersCollection = options.ordersCollection;
        this.listenTo(this.ordersCollection, 'update', this.incrementPopularity);
        this.render();
    },
    render: function(){
        this.$el.html(this.template());
    },
    incrementPopularity: function(){
        var dude = this.ordersCollection;
        console.log('uppy',dude);
    }
})