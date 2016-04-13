cordova.define("com.plugin.callphone.CallPhonePlugin", function(require, exports, module) { var exec = require('cordova/exec');

CallPhonePlugin = {}

CallPhonePlugin.call = function(phoneNumber, success, error) {
    exec(success, error, "CallPhonePlugin", "call", [phoneNumber]);
}


});
