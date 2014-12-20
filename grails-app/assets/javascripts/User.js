/**
 * Created by steve on 12/20/14.
 */
var exmo = exmo || {};
exmo.model = exmo.model || {};
exmo.model.User = function() {
    var username, email, displayName;

    function prop(name) {
        if (arguments.length == 2) {
            this[name] = arguments[1];
        }
        return this[name];
    }

    function serialize() {
        return {
            username: prop('username'),
            email: prop('email'),
            displayName: prop('displayName')
        }
    }

    function parse(data) {
        prop('username', data.name);
        prop('email', data.email);
        prop('displayName', data.display_name);
        return this;
    }

    return {
        prop: prop,
        parse: parse,
        serialize: serialize,
    }
};