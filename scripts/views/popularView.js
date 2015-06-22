/**
 * Created by firewaterjoe on 6/21/15.
 */
import {MenuItemView} from './MenuItemView'
export default Backbone.View.extend({
    template:JST.popularItems,
    events: {
      'click .popular-dropdown': 'showPopular'
    },
    initialize: function(options){
        this.ordersCollection = options.ordersCollection;
        this.render();
    },
    render: function(){
        this.$el.html(this.template());

        this.orderPopularity();
    },
    orderPopularity: function(){

        var dude = this.collection.sortBy('timesOrdered').reverse();
        dude = dude.slice(0,10);
        this.newCollection = new Backbone.Collection(dude);
        //this.$('.popular-dropdown').append('<h1>herrow</h1>');
        this.renderChildren({newCollection:this.newCollection});

    },
    renderChildren: function(options){
        this.newCollection = options.newCollection;
        _.invoke(this.children || [], 'remove');
        this.children = this.newCollection.map(function(child) {

            var view = new MenuItemView({
                model: child,
                ordersCollection:this.ordersCollection
            });
            this.$('.popular-dropdown').after(view.el);

            return view;
        }.bind(this));

        return this;
    },

    remove: function(){
        _.invoke(this.children || [], 'remove');
        Backbone.View.prototype.remove.apply(this, arguments);
    },
    showPopular: function(){
       this.$('.popular .menu-item').toggleClass('hidden');
    }
})