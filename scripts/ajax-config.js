/**
 * Created by firewaterjoe on 6/18/15.
 */
$.ajaxPrefilter(function(options, originalOptions, jqXHR){
    if(options.url.match(/api.parse.com/)){
        options.headers = options.headers || {};
        options.headers['X-Parse-Application-Id'] = 'R7PacQiPGGwMkE7UMVTrDy2COj4ygEYIoUVOlxjh';
        options.headers['X-Parse-REST-API-Key'] = 'eOjsnOIe5QK3F02WfEgEgVO3NWXuP701n96wj4uC';
    }
});