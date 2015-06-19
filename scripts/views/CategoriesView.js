/**
 * Created by firewaterjoe on 6/19/15.
 */
export default Backbone.View.extend({
    template: JST.categories,
    initialize: function(){
        this.render();
    },
    render: function(){
        //this.renderChildren();
        console.log(this.collection);
        _.each(this.collection.groupBy('category'),function(food,category){

        this.$el.html(this.template(food.toJSON()));
        });
    }
    //renderChildren: function(){
    //    _.invoke(this.children || [], 'remove');
    //
    //    this.children = this.collection.map(function(child) {
    //        var view = new MenuItemView({
    //            model: child,
    //            ordersCollection:this.ordersCollection
    //        });
    //        this.$el.append(view.el);
    //        return view;
    //    }.bind(this));
    //
    //    return this;
    //},
    //
    //remove: function(){
    //    _.invoke(this.children || [], 'remove');
    //    Backbone.View.prototype.remove.apply(this, arguments);
    //
    //}

});