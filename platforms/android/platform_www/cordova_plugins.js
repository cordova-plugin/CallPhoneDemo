cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "pluginId": "cordova-plugin-whitelist",
        "runs": true
    },
    {
        "file": "plugins/com.plugin.callphone/www/CallPhonePlugin.js",
        "id": "com.plugin.callphone.CallPhonePlugin",
        "pluginId": "com.plugin.callphone",
        "clobbers": [
            "cordova.plugins.CallPhonePlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.1",
    "com.plugin.callphone": "0.0.1"
}
// BOTTOM OF METADATA
});