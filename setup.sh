#!/bin/sh
cordova plugin rm com.plugin.callphone
cordova plugin add ../CallPhonePlugin
cordova run android
