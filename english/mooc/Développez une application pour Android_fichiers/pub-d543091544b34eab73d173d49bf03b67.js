(function(root) {"use strict";var BASE_PROTOCOL="https:";var BASE_DOMAIN="//api.outbound.io";var BASE_URL=BASE_PROTOCOL+BASE_DOMAIN;var API_KEY="pub-d543091544b34eab73d173d49bf03b67";var API_PREFIX="/v2";var DOUBLE_CLICK_MS=250;var definitions=[];var debug=false;var CDN_URL="https://cdn.outbound.io";var IWP_WEBHOOKS_URL = "/i/webhooks/iwp";var IWP_SERVER_URL="";var IWP_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkIjp7ImVudl9pZCI6IjU2MjY1MzcxZWNmZDkwNmZmNDAwMGJkMyJ9LCJleHAiOjE0ODk5NzE3ODQsImlhdCI6MTQ1ODg2Nzc4NCwidiI6MH0.cDgWrAiQMGcMDQhw7dGQZq_vHtj8d-fh1RT88JSBOsY";/*! cayenne 18-02-2016 */
function encode(a){return encodeURIComponent(a)}function decode(a){return decodeURIComponent(a)}function stringifyCookieValue(a){return encode(String(a))}function parseCookieValue(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return decodeURIComponent(a.replace(/\+/g," "))}catch(b){}}function log(a,b){debug&&console.log(a,b)}function isMobileDevice(){var a=!1;return function(b){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(b)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,4)))&&(a=!0)}(navigator.userAgent||navigator.vendor||window.opera),a}function guid(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0,c="x"==a?b:3&b|8;return c.toString(16)})}function useCookieBasedLocalStorage(){OB_STORAGE={getItem:function(a){return a&&this.hasOwnProperty(a)?unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)"+escape(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"),"$1")):null},key:function(a){return unescape(document.cookie.replace(/\s*\=(?:.(?!;))*$/,"").split(/\s*\=(?:[^;](?!;))*[^;]?;\s*/)[a])},setItem:function(a,b){a&&(document.cookie=escape(a)+"="+escape(b)+"; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/",this.length=document.cookie.match(/\=/g).length)},length:0,removeItem:function(a){a&&this.hasOwnProperty(a)&&(document.cookie=escape(a)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/",this.length--)},hasOwnProperty:function(a){return new RegExp("(?:^|;\\s*)"+escape(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)}},OB_STORAGE.length=(document.cookie.match(/\=/g)||window.localStorage).length}function headers(a){return{"Content-type":"application/json","X-Outbound-Client":"Javascript/"+VERSION,"X-Outbound-Key":API_KEY,"X-Outbound-GUID":a}}function setUserId(a){cookie("_ob_"+API_KEY,a,{path:"/",expires:1e3}),setupSyncConnection()}function getUserId(){return cookie("_ob_"+API_KEY)}function resetUser(){removeCookie("_ob_"+API_KEY)}function hasIdentifiedUser(){return!!getUserId()}function userObject(a){var b={};return a=a||{},a&&"[object Object]"===Object.prototype.toString.call(a)&&(a.previousId&&(b.previous_id=a.previousId),a.groupId&&(b.group_id=a.groupId),a.groupAttributes&&(b.group_attributes=a.groupAttributes),a.firstName&&(b.first_name=a.firstName),a.lastName&&(b.last_name=a.lastName),a.email&&(b.email=a.email),a.phoneNumber&&(b.phone_number=a.phoneNumber),a.apnsTokens&&("string"==typeof a.apnsTokens&&(a.apnsTokens=[a.apnsTokens]),"[object Array]"===Object.prototype.toString.call(a.apnsTokens)&&(b.apns=a.apnsTokens)),a.gcmTokens&&("string"==typeof a.gcmTokens&&(a.gcmTokens=[a.gcmTokens]),"[object Array]"===Object.prototype.toString.call(a.gcmTokens)&&(b.gcm=a.gcmTokens))),a.attributes&&"[object Object]"===Object.prototype.toString.call(a.attributes)&&(b.attributes=a.attributes),b}function error(a,b){return{receivedCall:b||!1,message:a}}function makeTrackCall(a,b,c,d){if(void 0!==c)var e=c.user_id;e=e||getUserId();var f=typeof e,g=typeof a;if(!e){var h="Call outbound.identify before tracking any events, like "+a;return console.log(h),error(h,!1)}if("number"!=f&&"string"!=f)return error("Invalid user ID. Expected string or number, got "+f,!1);if("string"!=g)return error("Invalid event. Expected string, got "+g,!1);var i={user_id:e,properties:{},event:a},j=userObject(c);for(var k in j)i.user||(i.user={}),i.user[k]=j[k];b&&"object"==typeof b&&(i.properties=b),d&&(i.definition_id=d),post("/track",i)}function post(a,b){queueCall({endpoint:a,data:b})}function queueCall(a){cachedCalls[guid()]=a,saveCalls(),sendCallsTimeout&&clearTimeout(sendCallsTimeout),sendCallsTimeout=setTimeout(sendCalls,CALL_BATCHING_DURATION)}function saveCalls(){OB_STORAGE.setItem(OUTBOUND_LS_KEY,JSON.stringify(cachedCalls))}function sendCalls(){if(!sendingCalls){sendingCalls=!0;for(var a in cachedCalls)if(cachedCalls.hasOwnProperty(a)){var b,c=cachedCalls[a],d=function(){var a=navigator.userAgent.toLowerCase();return-1!=a.indexOf("msie")?parseInt(a.split("msie")[1]):!1},e=new XMLHttpRequest;if(d()&&d()<10)e=new XDomainRequest,b=window.location.protocol+BASE_DOMAIN+API_PREFIX+c.endpoint+"?ie=1&key="+API_KEY,e.open("POST",b,!0);else{b=BASE_URL+API_PREFIX+c.endpoint,e.open("POST",b,!0);var f=headers(a);for(var g in f)e.setRequestHeader(g,f[g])}e.withCredentials=!0;var h=function(a){return function(){delete cachedCalls[a],saveCalls()}};e.onload=h(a),e.onerror=h(a),e.send(JSON.stringify(c.data))}sendingCalls=!1}}function deviceToken(a,b,c,d){var e=typeof currentUserId,f=typeof c;if(!currentUserId){var g="Call outbound.identify before making changes to mobile tokens";return console.log(g),error(g,!1)}return"number"!=e&&"string"!=e?error("Invalid user ID. Expected string or number, got "+e,!1):d!==!0&&"string"!=f?error("Invalid token. Expected string, got "+f,!1):(requestData={user_id:currentUserId},d===!0?requestData.all=!0:requestData.token=c,post("/"+a+"/"+(b?"register":"disable"),requestData),void 0)}function subscription(a,b,c){var d=typeof currentUserId,e=Object.prototype.toString.call([]);if(!currentUserId){var f="Call outbound.identify before making changes to user subscriptions.";return console.log(f),error(f,!1)}return"number"!=d&&"string"!=d?error("Invalid user ID. Expected string or number, got "+d,!1):b||Object.prototype.toString.call(c)==e&&0!=c.length?(requestData={user_id:currentUserId},b||(requestData.campaign_ids=c),url="/"+(a?"unsubscribe":"subscribe")+"/"+(b?"all":"campaigns"),post(url,requestData),void 0):error("At least one campaign ID required.")}function firebaseRootUrl(a){return IWP_SERVER_URL+"/"+a}function IwpMessage(a,b){var c=b.message;this.instanceId=b.instanceId,this.createdAt=new Date(1e3*c.sentAt),this.headline=c.headline,this.body=c.body,this.url=c.url,this.colors=c.colors,this.expiresAt=new Date(1e3*c.expiresAt),this.showMobile=c.showMobile,this.syncKey=a}function sendMetricCall(a,b){var c=D();log("Sending this call: "+a+" for "+b.instanceId,b);var d=new Date;return jQuery.ajax(BASE_DOMAIN+IWP_WEBHOOKS_URL+"/"+a,{method:"POST",dataType:"json",data:JSON.stringify({msgs:[{id:b.instanceId,timestamp:d.getTime()/1e3}]}),headers:headers(),success:c.resolve,error:c.reject}),c.promise}function processPushNotifications(a){if(!isShowing&&!isProcessing){isProcessing=!0;for(var b=jQuery.map(a,function(a,b){return new IwpMessage(b,a)}),c=[],d=0;d<b.length;d++){var e=b[d];e.hasExpired()?e.expire():(!isMobileDevice()||e.showMobile)&&c.push(e)}if(0===c.length)return void(isProcessing=!1);if(c.length>1){c=c.sort(function(a,b){return b.createdAt-a.createdAt});for(var f=1;f<c.length;f++)c[f].crowdedOut()}var g=c[0];pushHandler(g),notificationTimeout=setTimeout(function(){g.registerImpression()},1e3*LONG_VIEW_DURATION_SECS),isProcessing=!1}}function setupSyncConnection(){var a=getUserId();a&&IWP_SERVER_URL&&"undefined"!=typeof Firebase&&!syncInstance&&(syncInstance=new Firebase(firebaseRootUrl(Base64.encode(a).split("=")[0])),syncInstance.authWithCustomToken(IWP_KEY,function(a){a?console.log("Sync server authentication failed."):(outbound.handlePush(function(a){a.show()}),syncInstance.on("value",function(a){a.val()&&processPushNotifications(a.val())}))}))}function assertFirebase(){syncAttemptCount++,"undefined"!=typeof Firebase?setupSyncConnection():100>syncAttemptCount&&setTimeout(assertFirebase,100)}var D=function(a){function b(a){j(function(){throw a})}function c(b){return this.then(b,a)}function d(b){return this.then(a,b)}function e(b,c){return this.then(function(a){return k(b)?b.apply(null,l(a)?a:[a]):t.onlyFuncs?a:b},c||a)}function f(a){function b(){a()}return this.then(b,b),this}function g(a){return this.then(function(b){return k(a)?a.apply(null,l(b)?b.splice(0,0,void 0)&&b:[void 0,b]):t.onlyFuncs?b:a},function(b){return a(b)})}function h(c){return this.then(a,c?function(a){throw c(a),a}:b)}function i(a,b){var c=o(a);if(1===c.length&&l(c[0])){if(!c[0].length)return t.fulfilled([]);c=c[0]}var d=[],e=t(),f=c.length;if(f)for(var g=(function(a){c[a]=t.promisify(c[a]),c[a].then(function(g){a in d||(d[a]=b?c[a]:g,--f||e.resolve(d))},function(g){a in d||(b?(d[a]=c[a],--f||e.resolve(d)):e.reject(g))})}),h=0,i=f;i>h;h++)g(h);else e.resolve(d);return e.promise}var j,k=function(a){return"function"==typeof a},l=function(a){return Array.isArray?Array.isArray(a):a instanceof Array},m=function(a){return!(!a||!(typeof a).match(/function|object/))},n=function(b){return b===!1||b===a||null===b},o=function(a,b){return[].slice.call(a,b)},p="undefined",q=typeof TypeError===p?Error:TypeError;if(typeof process!==p&&process.nextTick)j=process.nextTick;else if(typeof MessageChannel!==p){var r=new MessageChannel,s=[];r.port1.onmessage=function(){s.length&&s.shift()()},j=function(a){s.push(a),r.port2.postMessage(0)}}else j=function(a){setTimeout(a,0)};var t=function(b){function i(){if(0!==s){var a,b=u,c=0,d=b.length,e=~s?0:1;for(u=[];d>c;c++)(a=b[c][e])&&a(p)}}function l(a){function b(a){return function(b){return c?void 0:(c=!0,a(b))}}var c=!1;if(s)return this;try{var d=m(a)&&a.then;if(k(d)){if(a===v)throw new q("Promise can't resolve itself");return d.call(a,b(l),b(o)),this}}catch(e){return b(o)(e),this}return r(function(){p=a,s=1,i()}),this}function o(a){return s||r(function(){try{throw a}catch(b){p=b}s=-1,i()}),this}var p,r=(a!==b?b:t.alwaysAsync)?j:function(a){a()},s=0,u=[],v={then:function(a,b){var c=t();return u.push([function(b){try{c.resolve(n(a)?b:k(a)?a(b):t.onlyFuncs?b:a)}catch(d){c.reject(d)}},function(a){if((n(b)||!k(b)&&t.onlyFuncs)&&c.reject(a),b)try{c.resolve(k(b)?b(a):b)}catch(d){c.reject(d)}}]),0!==s&&r(i),c.promise},success:c,error:d,otherwise:d,apply:e,spread:e,ensure:f,nodify:g,rethrow:h,isPending:function(){return!(0!==s)},getStatus:function(){return s}};return v.toSource=v.toString=v.valueOf=function(){return p===a?this:p},{promise:v,resolve:l,fulfill:l,reject:o}};return t.deferred=t.defer=t,t.nextTick=j,t.alwaysAsync=!0,t.onlyFuncs=!0,t.resolved=t.fulfilled=function(a){return t(!0).resolve(a).promise},t.rejected=function(a){return t(!0).reject(a).promise},t.wait=function(a){var b=t();return setTimeout(b.resolve,a||0),b.promise},t.delay=function(a,b){var c=t();return setTimeout(function(){try{c.resolve(a.apply(null))}catch(b){c.reject(b)}},b||0),c.promise},t.promisify=function(a){return a&&k(a.then)?a:t.resolved(a)},t.all=function(){return i(arguments,!1)},t.resolveAll=function(){return i(arguments,!0)},t.nodeCapsule=function(a,b){return b||(b=a,a=void 0),function(){var c=t(),d=o(arguments);d.push(function(a,b){a?c.reject(a):c.resolve(arguments.length>2?o(arguments,1):b)});try{b.apply(a,d)}catch(e){c.reject(e)}return c.promise}},t}(),Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(a){var b,c,d,e,f,g,h,i="",j=0;for(a=Base64._utf8_encode(a);j<a.length;)b=a.charCodeAt(j++),c=a.charCodeAt(j++),d=a.charCodeAt(j++),e=b>>2,f=(3&b)<<4|c>>4,g=(15&c)<<2|d>>6,h=63&d,isNaN(c)?g=h=64:isNaN(d)&&(h=64),i=i+this._keyStr.charAt(e)+this._keyStr.charAt(f)+this._keyStr.charAt(g)+this._keyStr.charAt(h);return i},decode:function(a){var b,c,d,e,f,g,h,i="",j=0;for(a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");j<a.length;)e=this._keyStr.indexOf(a.charAt(j++)),f=this._keyStr.indexOf(a.charAt(j++)),g=this._keyStr.indexOf(a.charAt(j++)),h=this._keyStr.indexOf(a.charAt(j++)),b=e<<2|f>>4,c=(15&f)<<4|g>>2,d=(3&g)<<6|h,i+=String.fromCharCode(b),64!=g&&(i+=String.fromCharCode(c)),64!=h&&(i+=String.fromCharCode(d));return i=Base64._utf8_decode(i)},_utf8_encode:function(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(d>>6|192),b+=String.fromCharCode(63&d|128)):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128),b+=String.fromCharCode(63&d|128))}return b},_utf8_decode:function(a){for(var b="",c=0,d=c1=c2=0;c<a.length;)d=a.charCodeAt(c),128>d?(b+=String.fromCharCode(d),c++):d>191&&224>d?(c2=a.charCodeAt(c+1),b+=String.fromCharCode((31&d)<<6|63&c2),c+=2):(c2=a.charCodeAt(c+1),c3=a.charCodeAt(c+2),b+=String.fromCharCode((15&d)<<12|(63&c2)<<6|63&c3),c+=3);return b}},cookie=function(a,b,c){if(void 0===c&&(c={}),arguments.length>1){if("number"==typeof c.expires){var d=c.expires,e=c.expires=new Date;e.setTime(+e+864e5*d)}return document.cookie=[encode(a),"=",stringifyCookieValue(b),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")}for(var f=a?void 0:{},g=document.cookie?document.cookie.split("; "):[],h=0,i=g.length;i>h;h++){var j=g[h].split("="),k=decode(j.shift()),l=j.join("=");if(a&&a===k){f=parseCookieValue(l,b);break}a||void 0===(l=parseCookieValue(l))||(f[k]=l)}return f},removeCookie=function(a,b){return void 0===cookie(a)?!1:(cookie(a,"",b),!cookie(a))},OB_STORAGE;if(window.localStorage){OB_STORAGE=window.localStorage;try{OB_STORAGE.setItem("localStorageTest",1),OB_STORAGE.removeItem("localStorageTest")}catch(e){useCookieBasedLocalStorage()}}else useCookieBasedLocalStorage();var VERSION="1.0.0",APNS="apns",GCM="gcm",OUTBOUND_LS_KEY="Outbound.LocalStorage",CALL_BATCHING_DURATION=1e3,pushHandler,cachedCalls={},sendingCalls=!1,sendCallsTimeout,outbound={alias:function(a){var b=typeof a;if("number"!=b&&"string"!=b)return error("Invalid user ID. Expected string or number, got "+b,!1);if(currentUserId){var c={user_id:a,previous_id:currentUserId};post("/identify",c)}setUserId(a)},identify:function(a,b){var c=typeof a;if("number"!=c&&"string"!=c)return error("Invalid user ID. Expected string or number, got "+c,!1);var d={user_id:a},e=userObject(b);for(var f in e)d[f]=e[f];post("/identify",d),setUserId(a)},trackByDefinition:function(a,b,c,d){return makeTrackCall(b,c,d,a)},track:function(a,b,c){return makeTrackCall(a,b,c)},registerApnsToken:function(a){return deviceToken(APNS,!0,a)},registerGcmToken:function(a){return deviceToken(GCM,!0,a)},disableApnsToken:function(a){return deviceToken(APNS,!1,a)},disableGcmToken:function(a){return deviceToken(GCM,!1,a)},disableAllGcmTokens:function(){return deviceToken(GCM,!1,void 0,!0)},disableAllApnsTokens:function(){return deviceToken(APNS,!1,void 0,!0)},unsubscribeAll:function(){return subscription(!0,!0,null)},unsubscribeCampaigns:function(a){return subscription(!0,!1,a)},subscribeAll:function(){return subscription(!1,!0,null)},subscribeCampaigns:function(a){return subscription(!1,!1,a)},handlePush:function(a){pushHandler=a},reset:resetUser,hasIdentified:hasIdentifiedUser};if(OB_STORAGE.getItem(OUTBOUND_LS_KEY)){try{cachedCalls=JSON.parse(OB_STORAGE.getItem(OUTBOUND_LS_KEY))}catch(e){}sendCalls()}for(var outstandingCalls=window.outbound||[];outstandingCalls&&outstandingCalls.length>0;){var args=outstandingCalls.shift(),method=args.shift();outbound[method].apply(null,args)}window?window.outbound=outbound:root.outbound=outbound;var attemptCount=0,hooks=[],jqVersion=void 0;if("undefined"!=typeof jQuery&&(jqVersion=jQuery.fn.jquery.split(".").map(parseFloat)),void 0===jqVersion||10*jqVersion[0]+jqVersion[1]<15){var script=document.createElement("script");script.type="text/javascript",script.src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js",script.async=!0;var first=document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script,first)}var setupListeners=function(){function a(a,c){for(var d=0;d<b.length;d++){var e=b[d];if(c&&e.match(new RegExp("^"+a+"$")))return!0;if(!c&&e===a)return!0}return!1}jQuery.each(hooks,function(a,b){jQuery(b[0]).unbind("click",b[1])}),hooks=[];var b=[window.location.pathname];window.location.hash&&b.push(window.location.pathname+window.location.hash),jQuery.each(definitions,function(b,c){if(a(c.config.path,c.config.regex))if(1===c.type)outbound.track(c.name);else if(2===c.type){var d=function(){var a=!0;return function(){a&&(a=!1,outbound.trackByDefinition(c.id,c.name),setTimeout(function(){a=!0},DOUBLE_CLICK_MS))}},e=d();jQuery(c.config.selector).bind("click",e),hooks.push([c.config.selector,e])}})},setupPageChangeListener=function(){function a(){window.location.href!=b&&(b=window.location.href,setupListeners())}var b;a(),setInterval(a,500)},init=function(){attemptCount++,"undefined"!=typeof jQuery?setupPageChangeListener():100>attemptCount&&setTimeout(init,100)};init();var syncAttemptCount=0,syncInstance,LONG_VIEW_DURATION_SECS=15,isProcessing=!1,isShowing=!1,notificationTimeout;if(IwpMessage.prototype.hasExpired=function(){return this.expiresAt<=parseInt((new Date).getTime()/1e3)},IwpMessage.prototype.expire=function(){var a=this;sendMetricCall("expired",a).then(function(){log("Expired notification: ",a),a.remove()})},IwpMessage.prototype.crowdedOut=function(){var a=this;sendMetricCall("purged",a).then(function(){log("Crowded out notification: ",a),a.remove()})},IwpMessage.prototype.show=function(){isShowing=!0,log("Showing notification: ",this),this.display()},IwpMessage.prototype.display=function(){var a=$("<div class='iwp'></div>"),b=this;a.click(function(){b.click()}),a.hover(function(){b.registerImpression()}),a.css({"background-color":this.colors.background,"border-color":this.colors.border,display:"block"});var c=$("<div class='close'></div>");c.click(function(a){b.dismiss(),a.stopPropagation()});var d=$("<div class='iwp-headline'></div>").text(this.headline).css("color",this.colors.headline),e=$("<div class='iwp-body'></div>").text(this.body).css("color",this.colors.headline);a.append(d).append(e).append(c),$("body").append(a),this.$el=a},IwpMessage.prototype.removeEl=function(){this.$el&&this.$el.remove(),isShowing=!1},IwpMessage.prototype.registerImpression=function(){if(!this.registered){this.registered=!0;var a=this;sendMetricCall("impression",a).then(function(){log("Registering impression for notification: ",a),clearTimeout(notificationTimeout),a.remove()})}},IwpMessage.prototype.dismiss=function(){this.registerImpression();var a=this;a.removeEl(),sendMetricCall("dismiss",a).then(function(){log("Dismissing notification: ",a)})},IwpMessage.prototype.click=function(){this.registerImpression();var a=this;sendMetricCall("click",a).then(function(){log("Clicked notification: ",a),a.removeEl(),a.url&&(window.location.href=a.url)})},IwpMessage.prototype.remove=function(){syncInstance.child(this.syncKey).ref().remove()},IWP_SERVER_URL){if("undefined"==typeof Firebase){var script=document.createElement("script");script.type="text/javascript",script.src="//cdn.firebase.com/js/client/2.2.1/firebase.js",script.async=!0;var first=document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script,first),assertFirebase()}var link=document.createElement("link");link.href=CDN_URL+"/iwp.css",link.rel="stylesheet";var first=document.getElementsByTagName("script")[0];first.parentNode.insertBefore(link,first)}}(this));