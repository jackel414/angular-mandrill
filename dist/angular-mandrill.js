!function(){"use strict";angular.module("angular-mandrill",[])}();;!function(){"use strict";angular.module("angular-mandrill").constant("EVENTS",{}).constant("URLS",{base:""})}();;!function(){"use strict";angular.module("angular-mandrill").provider("Mandrill",function(){var apiKey,defaults={},baseUrl="https://mandrillapp.com/api/1.0/";return{setApiKey:function(value){apiKey=value},setDefaults:function(value){defaults=value},$get:["$http",function($http){var mandrill={},config={},data={key:apiKey};return config.messages={},mandrill.messages={},mandrill.messages.send=function(userData){var sendData=angular.extend({},data,userData);return $http.post(baseUrl+"messages/send.json",sendData)},mandrill}]}})}();;!function(){"use strict";angular.module("angular-mandrill").run(function(){})}();