/**
 * Created by firewaterjoe on 6/18/15.
 */

var MenuView = Backbone.View.extend({
    template: JST.menu,
    className: 'menu',
    tagName: 'section',

    initialize: function(){

        this.render();
    },
    render: function(){
        this.$el.html(this.template());
    }
});

var MenuItemView = Backbone.View.extend({
    template: JST.menuItem,

    initialize: function(){

        this.render()
    },
    render: function(){
        console.log(this.collection.toJSON());
        this.$el.html(this.template(this.collection.toJSON()));

    }
});

export default {MenuView,MenuItemView};