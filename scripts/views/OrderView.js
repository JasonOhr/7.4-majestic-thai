/**
 * Created by firewaterjoe on 6/18/15.
 */
export default Backbone.View.extend({
   template: JST.order,
    initialize: function(){

        this.listenTo(this.collection, "update", this.sayHey);
        this.render();
    },
    render: function(){
        this.$el.html(this.template());
    },
    sayHey: function(){
        console.log('Hey');
    }
});