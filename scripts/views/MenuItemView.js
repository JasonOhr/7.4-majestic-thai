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
    events: {
        'click .menu-item': 'checkIt'
    },
    initialize: function(){

        this.render()
    },
    render: function(){
        console.log(this.model.toJSON());
        this.$el.html(this.template(this.model.toJSON()));

    },
    checkIt: function(){
        var hey = this.model.toJSON();
        console.log(hey)

    }

});

export default {MenuView,MenuItemView};