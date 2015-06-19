import ajaxConfig from './ajax-config'
import router from './router'

(function(){
  'use strict';

  $(document).ready(function(){
      Backbone.history.start();
    //$('body').prepend(JST.application());
  });
    Handlebars.registerHelper('toDecimal', function(price){
        var formatPrice = 0;
        if (!price){
            formatPrice = "0.00"
        }else {
            formatPrice = (price/100).toFixed(2)
        }
        return new Handlebars.SafeString('$' + formatPrice);
    })
})();
