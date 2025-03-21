/*
 * Copyright (c) 2012-present, salesforce.com, inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided
 * that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of conditions and the
 * following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and
 * the following disclaimer in the documentation and/or other materials provided with the distribution.
 *
 * Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or
 * promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * MockSDKInfo
 * Meant for development and testing only, the data is stored in SessionStorage, queries do full scans.
 */

var MockSDKInfo = (function(window) {

    // Constructor
    var module = function() {}; 

    var SDKInfo = cordova.require("com.salesforce.plugin.sdkinfo").SDKInfo;

    // Prototype
    module.prototype = {
        constructor: module,

        hookToCordova: function(cordova) {
            var SDKINFO_SERVICE = "com.salesforce.sdkinfo";
            var self = this;

            cordova.interceptExec(SDKINFO_SERVICE, "getInfo", function (successCB, errorCB, args) {
                successCB(new SDKInfo("13.1.0", 
                                      ["com.salesforce.oauth", "com.salesforce.sdkinfo", "com.salesforce.sfaccountmanager", "com.salesforce.network", "com.salesforce.testrunner", "com.salesforce.smartstore", "com.salesforce.mobilesync"], 
                                      "SalesforceHybridSDKTestApp", "1.0",
                                      {
                                          "remoteAccessConsumerKey": "3MVG9Iu66FKeHhINkB1l7xt7kR8czFcCTUhgoA8Ol2Ltf1eYHOU4SqQRSEitYFDUpqRWcoQ2.dBv_a1Dyu5xa",
                                          "oauthRedirectURI": "testsfdc:///mobilesdk/detect/oauth/done",
                                          "oauthScopes": ["api"],
                                          "isLocal": true,
                                          "startPage": "index.html",
                                          "errorPage": "error.html",
                                          "shouldAuthenticate": true,
                                          "attemptOfflineLoad": false
                                      }
                                     ));
            });
        }

    };

    // Return module
    return module;
})(window);

var mockSDKInfo = new MockSDKInfo();
mockSDKInfo.hookToCordova(cordova);

