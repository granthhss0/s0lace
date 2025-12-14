(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["firebase-messaging"],{"741f":function(e,t,n){"use strict";n.r(t);var r,o,i,s=n("c23d"),a=n.n(s),c=n("9ab4"),u=n("cd51"),d=(r={},r["only-available-in-window"]="This method is available in a Window context.",r["only-available-in-sw"]="This method is available in a service worker context.",r["should-be-overriden"]="This method should be overriden by extended classes.",r["bad-sender-id"]="Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().",r["permission-default"]="The required permissions were not granted and dismissed instead.",r["permission-blocked"]="The required permissions were not granted and blocked instead.",r["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",r["notifications-blocked"]="Notifications have been blocked.",r["failed-serviceworker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",r["sw-registration-expected"]="A service worker registration was the expected input.",r["get-subscription-failed"]="There was an error when trying to get any existing Push Subscriptions.",r["invalid-saved-token"]="Unable to access details of the saved token.",r["sw-reg-redundant"]="The service worker being used for push was made redundant.",r["token-subscribe-failed"]="A problem occured while subscribing the user to FCM: {$errorInfo}",r["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",r["token-subscribe-no-push-set"]="FCM returned an invalid response when getting an FCM token.",r["token-unsubscribe-failed"]="A problem occured while unsubscribing the user from FCM: {$errorInfo}",r["token-update-failed"]="A problem occured while updating the user from FCM: {$errorInfo}",r["token-update-no-token"]="FCM returned no token when updating the user to push.",r["use-sw-before-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",r["invalid-delete-token"]="You must pass a valid token into deleteToken(), i.e. the token from getToken().",r["delete-token-not-found"]="The deletion attempt for token could not be performed as the token was not found.",r["delete-scope-not-found"]="The deletion attempt for service worker scope could not be performed as the scope was not found.",r["bg-handler-function-expected"]="The input to setBackgroundMessageHandler() must be a function.",r["no-window-client-to-msg"]="An attempt was made to message a non-existant window client.",r["unable-to-resubscribe"]="There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$errorInfo}",r["no-fcm-token-for-resubscribe"]="Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.",r["failed-to-delete-token"]="Unable to delete the currently saved token.",r["no-sw-in-reg"]="Even though the service worker registration was successful, there was a problem accessing the service worker itself.",r["bad-scope"]="The service worker scope must be a string with at least one character.",r["bad-vapid-key"]="The public VAPID key is not a Uint8Array with 65 bytes.",r["bad-subscription"]="The subscription must be a valid PushSubscription.",r["bad-token"]="The FCM Token used for storage / lookup was not a valid token string.",r["bad-push-set"]="The FCM push set used for storage / lookup was not not a valid push set string.",r["failed-delete-vapid-key"]="The VAPID key could not be deleted.",r["invalid-public-vapid-key"]="The public VAPID key must be a string.",r["use-public-key-before-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",r["public-vapid-key-decryption-failed"]="The public VAPID key did not equal 65 bytes when decrypted.",r),f=new u["ErrorFactory"]("messaging","Messaging",d),h=new Uint8Array([4,51,148,247,223,161,235,177,220,3,162,94,21,113,219,72,211,46,237,237,178,52,219,183,71,58,12,143,196,204,225,111,60,140,132,223,171,182,102,62,242,12,212,139,254,227,249,118,47,20,28,99,8,106,111,45,177,26,149,176,206,55,192,156,110]),l="https://fcm.googleapis.com";
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function p(e,t){if(null==e||null==t)return!1;if(e===t)return!0;if(e.byteLength!==t.byteLength)return!1;for(var n=new DataView(e),r=new DataView(t),o=0;o<e.byteLength;o++)if(n.getUint8(o)!==r.getUint8(o))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e){var t=new Uint8Array(e);return btoa(String.fromCharCode.apply(String,Object(c["__spread"])(t)))}function g(e){var t=b(e);return t.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e["TYPE_OF_MSG"]="firebase-messaging-msg-type",e["DATA"]="firebase-messaging-msg-data"})(o||(o={})),function(e){e["PUSH_MSG_RECEIVED"]="push-msg-received",e["NOTIFICATION_CLICKED"]="notification-clicked"}(i||(i={}));var w=function(){function e(){}return e.prototype.getToken=function(e,t,n){return Object(c["__awaiter"])(this,void 0,void 0,(function(){var r,o,i,s,a,u,d,b,w,v;return Object(c["__generator"])(this,(function(c){switch(c.label){case 0:r=g(t.getKey("p256dh")),o=g(t.getKey("auth")),i="authorized_entity="+e+"&endpoint="+t.endpoint+"&encryption_key="+r+"&encryption_auth="+o,p(n.buffer,h.buffer)||(s=g(n),i+="&application_pub_key="+s),a=new Headers,a.append("Content-Type","application/x-www-form-urlencoded"),u={method:"POST",headers:a,body:i},c.label=1;case 1:return c.trys.push([1,4,,5]),[4,fetch(l+"/fcm/connect/subscribe",u)];case 2:return b=c.sent(),[4,b.json()];case 3:return d=c.sent(),[3,5];case 4:throw w=c.sent(),f.create("token-subscribe-failed",{errorInfo:w});case 5:if(d.error)throw v=d.error.message,f.create("token-subscribe-failed",{errorInfo:v});if(!d.token)throw f.create("token-subscribe-no-token");if(!d.pushSet)throw f.create("token-subscribe-no-push-set");return[2,{token:d.token,pushSet:d.pushSet}]}}))}))},e.prototype.updateToken=function(e,t,n,r,o){return Object(c["__awaiter"])(this,void 0,void 0,(function(){var i,s,a,u,d,b,w,v,_,y;return Object(c["__generator"])(this,(function(c){switch(c.label){case 0:i=g(r.getKey("p256dh")),s=g(r.getKey("auth")),a="push_set="+n+"&token="+t+"&authorized_entity="+e+"&endpoint="+r.endpoint+"&encryption_key="+i+"&encryption_auth="+s,p(o.buffer,h.buffer)||(u=g(o),a+="&application_pub_key="+u),d=new Headers,d.append("Content-Type","application/x-www-form-urlencoded"),b={method:"POST",headers:d,body:a},c.label=1;case 1:return c.trys.push([1,4,,5]),[4,fetch(l+"/fcm/connect/subscribe",b)];case 2:return v=c.sent(),[4,v.json()];case 3:return w=c.sent(),[3,5];case 4:throw _=c.sent(),f.create("token-update-failed",{errorInfo:_});case 5:if(w.error)throw y=w.error.message,f.create("token-update-failed",{errorInfo:y});if(!w.token)throw f.create("token-update-no-token");return[2,w.token]}}))}))},e.prototype.deleteToken=function(e,t,n){return Object(c["__awaiter"])(this,void 0,void 0,(function(){var r,o,i,s,a,u,d;return Object(c["__generator"])(this,(function(c){switch(c.label){case 0:r="authorized_entity="+e+"&token="+t+"&pushSet="+n,o=new Headers,o.append("Content-Type","application/x-www-form-urlencoded"),i={method:"POST",headers:o,body:r},c.label=1;case 1:return c.trys.push([1,4,,5]),[4,fetch(l+"/fcm/connect/unsubscribe",i)];case 2:return s=c.sent(),[4,s.json()];case 3:if(a=c.sent(),a.error)throw u=a.error.message,f.create("token-unsubscribe-failed",{errorInfo:u});return[3,5];case 4:throw d=c.sent(),f.create("token-unsubscribe-failed",{errorInfo:d});case 5:return[2]}}))}))},e}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e){for(var t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),o=new Uint8Array(r.length),i=0;i<r.length;++i)o[i]=r.charCodeAt(i);return o}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _="undefined",y="fcm_token_object_Store";function k(e){if(e.objectStoreNames.contains(y)){var t=e.transaction(y),n=t.objectStore(y),r=new w,o=n.openCursor();o.onerror=function(e){console.warn("Unable to cleanup old IDB.",e)},o.onsuccess=function(){var t=o.result;if(t){var n=t.value;r.deleteToken(n.fcmSenderId,n.fcmToken,n.fcmPushSet),t.continue()}else e.close(),indexedDB.deleteDatabase(_)}}}function m(){var e=indexedDB.open(_);e.onerror=function(e){},e.onsuccess=function(t){var n=e.result;k(n)}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var T=function(){function e(){this.dbPromise=null}return e.prototype.get=function(e){return this.createTransaction((function(t){return t.get(e)}))},e.prototype.getIndex=function(e,t){function n(n){var r=n.index(e);return r.get(t)}return this.createTransaction(n)},e.prototype.put=function(e){return this.createTransaction((function(t){return t.put(e)}),"readwrite")},e.prototype.delete=function(e){return this.createTransaction((function(t){return t.delete(e)}),"readwrite")},e.prototype.closeDatabase=function(){return Object(c["__awaiter"])(this,void 0,void 0,(function(){var e;return Object(c["__generator"])(this,(function(t){switch(t.label){case 0:return this.dbPromise?[4,this.dbPromise]:[3,2];case 1:e=t.sent(),e.close(),this.dbPromise=null,t.label=2;case 2:return[2]}}))}))},e.prototype.createTransaction=function(e,t){return void 0===t&&(t="readonly"),Object(c["__awaiter"])(this,void 0,void 0,(function(){var n,r,o,i;return Object(c["__generator"])(this,(function(s){switch(s.label){case 0:return[4,this.getDb()];case 1:return n=s.sent(),r=n.transaction(this.objectStoreName,t),o=r.objectStore(this.objectStoreName),[4,S(e(o))];case 2:return i=s.sent(),[2,new Promise((function(e,t){r.oncomplete=function(){e(i)},r.onerror=function(){t(r.error)}}))]}}))}))},e.prototype.getDb=function(){var e=this;return this.dbPromise||(this.dbPromise=new Promise((function(t,n){var r=indexedDB.open(e.dbName,e.dbVersion);r.onsuccess=function(){t(r.result)},r.onerror=function(){e.dbPromise=null,n(r.error)},r.onupgradeneeded=function(t){return e.onDbUpgrade(r,t)}}))),this.dbPromise},e}();function S(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.dbName="fcm_token_details_db",t.dbVersion=3,t.objectStoreName="fcm_token_object_Store",t}return Object(c["__extends"])(t,e),t.prototype.onDbUpgrade=function(e,t){var n=e.result;switch(t.oldVersion){case 0:var r=n.createObjectStore(this.objectStoreName,{keyPath:"swScope"});r.createIndex("fcmSenderId","fcmSenderId",{unique:!1}),r.createIndex("fcmToken","fcmToken",{unique:!0});case 1:m();case 2:r=e.transaction.objectStore(this.objectStoreName);var o=r.openCursor();o.onsuccess=function(){var e=o.result;if(e){var t=e.value,n=Object(c["__assign"])({},t);t.createTime||(n.createTime=Date.now()),"string"===typeof t.vapidKey&&(n.vapidKey=v(t.vapidKey)),"string"===typeof t.auth&&(n.auth=v(t.auth).buffer),"string"===typeof t.auth&&(n.p256dh=v(t.p256dh).buffer),e.update(n),e.continue()}};default:}},t.prototype.getTokenDetailsFromToken=function(e){return Object(c["__awaiter"])(this,void 0,void 0,(function(){return Object(c["__generator"])(this,(function(t){if(!e)throw f.create("bad-token");return j({fcmToken:e}),[2,this.getIndex("fcmToken",e)]}))}))},t.prototype.getTokenDetailsFromSWScope=function(e){return Object(c["__awaiter"])(this,void 0,void 0,(function(){return Object(c["__generator"])(this,(function(t){if(!e)throw f.create("bad-scope");return j({swScope:e}),[2,this.get(e)]}))}))},t.prototype.saveTokenDetails=function(e){return Object(c["__awaiter"])(this,void 0,void 0,(function(){return Object(c["__generator"])(this,(function(t){if(!e.swScope)throw f.create("bad-scope");if(!e.vapidKey)throw f.create("bad-vapid-key");if(!e.endpoint||!e.auth||!e.p256dh)throw f.create("bad-subscription");if(!e.fcmSenderId)throw f.create("bad-sender-id");if(!e.fcmToken)throw f.create("bad-token");if(!e.fcmPushSet)throw f.create("bad-push-set");return j(e),[2,this.put(e)]}))}))},t.prototype.deleteToken=function(e){return Object(c["__awaiter"])(this,void 0,void 0,(function(){var t;return Object(c["__generator"])(this,(function(n){switch(n.label){case 0:return"string"!==typeof e||0===e.length?[2,Promise.reject(f.create("invalid-delete-token"))]:[4,this.getTokenDetailsFromToken(e)];case 1:if(t=n.sent(),!t)throw f.create("delete-token-not-found");return[4,this.delete(t.swScope)];case 2:return n.sent(),[2,t]}}))}))},t}(T);function j(e){if(e.fcmToken&&("string"!==typeof e.fcmToken||0===e.fcmToken.length))throw f.create("bad-token");if(e.swScope&&("string"!==typeof e.swScope||0===e.swScope.length))throw f.create("bad-scope");if(e.vapidKey&&(!(e.vapidKey instanceof Uint8Array)||65!==e.vapidKey.length))throw f.create("bad-vapid-key");if(e.endpoint&&("string"!==typeof e.endpoint||0===e.endpoint.length))throw f.create("bad-subscription");if(e.auth&&!(e.auth instanceof ArrayBuffer))throw f.create("bad-subscription");if(e.p256dh&&!(e.p256dh instanceof ArrayBuffer))throw f.create("bad-subscription");if(e.fcmSenderId&&("string"!==typeof e.fcmSenderId||0===e.fcmSenderId.length))throw f.create("bad-sender-id");if(e.fcmPushSet&&("string"!==typeof e.fcmPushSet||0===e.fcmPushSet.length))throw f.create("bad-push-set")}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P=65,M=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.dbName="fcm_vapid_details_db",t.dbVersion=1,t.objectStoreName="fcm_vapid_object_Store",t}return Object(c["__extends"])(t,e),t.prototype.onDbUpgrade=function(e){var t=e.result;t.createObjectStore(this.objectStoreName,{keyPath:"swScope"})},t.prototype.getVapidFromSWScope=function(e){return Object(c["__awaiter"])(this,void 0,void 0,(function(){var t;return Object(c["__generator"])(this,(function(n){switch(n.label){case 0:if("string"!==typeof e||0===e.length)throw f.create("bad-scope");return[4,this.get(e)];case 1:return t=n.sent(),[2,t?t.vapidKey:void 0]}}))}))},t.prototype.saveVapidDetails=function(e,t){return Object(c["__awaiter"])(this,void 0,void 0,(function(){var n;return Object(c["__generator"])(this,(function(r){if("string"!==typeof e||0===e.length)throw f.create("bad-scope");if(null===t||t.length!==P)throw f.create("bad-vapid-key");return n={swScope:e,vapidKey:t},[2,this.put(n)]}))}))},t.prototype.deleteVapidDetails=function(e){return Object(c["__awaiter"])(this,void 0,void 0,(function(){var t;return Object(c["__generator"])(this,(function(n){switch(n.label){case 0:return[4,this.getVapidFromSWScope(e)];case 1:if(t=n.sent(),!t)throw f.create("delete-scope-not-found");return[4,this.delete(e)];case 2:return n.sent(),[2,t]}}))}))},t}(T),D="messagingSenderId",I=6048e5,C=function(){function e(e){var t=this;if(!e.options[D]||"string"!==typeof e.options[D])throw f.create("bad-sender-id");this.messagingSenderId=e.options[D],this.tokenDetailsModel=new O,this.vapidDetailsModel=new M,this.iidModel=new w,this.app=e,this.INTERNAL={delete:function(){return t.delete()}}}return e.prototype.getToken=function(){return Object(c["__awaiter"])(this,void 0,void 0,(function(){var e,t,n,r,o;return Object(c["__generator"])(this,(function(i){switch(i.label){case 0:if(e=this.getNotificationPermission_(),"denied"===e)throw f.create("notifications-blocked");return"granted"!==e?[2,null]:[4,this.getSWRegistration_()];case 1:return t=i.sent(),[4,this.getPublicVapidKey_()];case 2:return n=i.sent(),[4,this.getPushSubscription(t,n)];case 3:return r=i.sent(),[4,this.tokenDetailsModel.getTokenDetailsFromSWScope(t.scope)];case 4:return o=i.sent(),o?[2,this.manageExistingToken(t,r,n,o)]:[2,this.getNewToken(t,r,n)]}}))}))},e.prototype.manageExistingToken=function(e,t,n,r){return Object(c["__awaiter"])(this,void 0,void 0,(function(){var o,i;return Object(c["__generator"])(this,(function(s){switch(s.label){case 0:return o=N(t,n,r),o?(i=Date.now(),i<r.createTime+I?[2,r.fcmToken]:[2,this.updateToken(e,t,n,r)]):[4,this.deleteTokenFromDB(r.fcmToken)];case 1:return s.sent(),[2,this.getNewToken(e,t,n)]}}))}))},e.prototype.updateToken=function(e,t,n,r){return Object(c["__awaiter"])(this,void 0,void 0,(function(){var o,i,s;return Object(c["__generator"])(this,(function(a){switch(a.label){case 0:return a.trys.push([0,4,,6]),[4,this.iidModel.updateToken(this.messagingSenderId,r.fcmToken,r.fcmPushSet,t,n)];case 1:return o=a.sent(),i={swScope:e.scope,vapidKey:n,fcmSenderId:this.messagingSenderId,fcmToken:o,fcmPushSet:r.fcmPushSet,createTime:Date.now(),endpoint:t.endpoint,auth:t.getKey("auth"),p256dh:t.getKey("p256dh")},[4,this.tokenDetailsModel.saveTokenDetails(i)];case 2:return a.sent(),[4,this.vapidDetailsModel.saveVapidDetails(e.scope,n)];case 3:return a.sent(),[2,o];case 4:return s=a.sent(),[4,this.deleteToken(r.fcmToken)];case 5:throw a.sent(),s;case 6:return[2]}}))}))},e.prototype.getNewToken=function(e,t,n){return Object(c["__awaiter"])(this,void 0,void 0,(function(){var r,o;return Object(c["__generator"])(this,(function(i){switch(i.label){case 0:return[4,this.iidModel.getToken(this.messagingSenderId,t,n)];case 1:return r=i.sent(),o={swScope:e.scope,vapidKey:n,fcmSenderId:this.messagingSenderId,fcmToken:r.token,fcmPushSet:r.pushSet,createTime:Date.now(),endpoint:t.endpoint,auth:t.getKey("auth"),p256dh:t.getKey("p256dh")},[4,this.tokenDetailsModel.saveTokenDetails(o)];case 2:return i.sent(),[4,this.vapidDetailsModel.saveVapidDetails(e.scope,n)];case 3:return i.sent(),[2,r.token]}}))}))},e.prototype.deleteToken=function(e){return Object(c["__awaiter"])(this,void 0,void 0,(function(){var t,n;return Object(c["__generator"])(this,(function(r){switch(r.label){case 0:return[4,this.deleteTokenFromDB(e)];case 1:return r.sent(),[4,this.getSWRegistration_()];case 2:return t=r.sent(),t?[4,t.pushManager.getSubscription()]:[3,4];case 3:if(n=r.sent(),n)return[2,n.unsubscribe()];r.label=4;case 4:return[2,!0]}}))}))},e.prototype.deleteTokenFromDB=function(e){return Object(c["__awaiter"])(this,void 0,void 0,(function(){var t;return Object(c["__generator"])(this,(function(n){switch(n.label){case 0:return[4,this.tokenDetailsModel.deleteToken(e)];case 1:return t=n.sent(),[4,this.iidModel.deleteToken(t.fcmSenderId,t.fcmToken,t.fcmPushSet)];case 2:return n.sent(),[2]}}))}))},e.prototype.getPushSubscription=function(e,t){return e.pushManager.getSubscription().then((function(n){return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:t})}))},e.prototype.requestPermission=function(){throw f.create("only-available-in-window")},e.prototype.useServiceWorker=function(e){throw f.create("only-available-in-window")},e.prototype.usePublicVapidKey=function(e){throw f.create("only-available-in-window")},e.prototype.onMessage=function(e,t,n){throw f.create("only-available-in-window")},e.prototype.onTokenRefresh=function(e,t,n){throw f.create("only-available-in-window")},e.prototype.setBackgroundMessageHandler=function(e){throw f.create("only-available-in-sw")},e.prototype.delete=function(){return Object(c["__awaiter"])(this,void 0,void 0,(function(){return Object(c["__generator"])(this,(function(e){switch(e.label){case 0:return[4,Promise.all([this.tokenDetailsModel.closeDatabase(),this.vapidDetailsModel.closeDatabase()])];case 1:return e.sent(),[2]}}))}))},e.prototype.getNotificationPermission_=function(){return Notification.permission},e.prototype.getTokenDetailsModel=function(){return this.tokenDetailsModel},e.prototype.getVapidDetailsModel=function(){return this.vapidDetailsModel},e.prototype.getIidModel=function(){return this.iidModel},e}();function N(e,t,n){if(!n.vapidKey||!p(t.buffer,n.vapidKey.buffer))return!1;var r=e.endpoint===n.endpoint,o=p(e.getKey("auth"),n.auth),i=p(e.getKey("p256dh"),n.p256dh);return r&&o&&i}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K="FCM_MSG",V=function(e){function t(t){var n=e.call(this,t)||this;return n.bgMessageHandler=null,self.addEventListener("push",(function(e){n.onPush(e)})),self.addEventListener("pushsubscriptionchange",(function(e){n.onSubChange(e)})),self.addEventListener("notificationclick",(function(e){n.onNotificationClick(e)})),n}return Object(c["__extends"])(t,e),t.prototype.onPush=function(e){e.waitUntil(this.onPush_(e))},t.prototype.onSubChange=function(e){e.waitUntil(this.onSubChange_(e))},t.prototype.onNotificationClick=function(e){e.waitUntil(this.onNotificationClick_(e))},t.prototype.onPush_=function(e){return Object(c["__awaiter"])(this,void 0,void 0,(function(){var t,n,r,o,i,s,a;return Object(c["__generator"])(this,(function(c){switch(c.label){case 0:if(!e.data)return[2];try{t=e.data.json()}catch(u){return[2]}return[4,this.hasVisibleClients_()];case 1:return n=c.sent(),n?[2,this.sendMessageToWindowClients_(t)]:(r=this.getNotificationData_(t),r?(o=r.title||"",[4,this.getSWRegistration_()]):[3,3]);case 2:return i=c.sent(),s=r.actions,a=Notification.maxActions,s&&a&&s.length>a&&console.warn("This browser only supports "+a+" actions.The remaining actions will not be displayed."),[2,i.showNotification(o,r)];case 3:return this.bgMessageHandler?[4,this.bgMessageHandler(t)]:[3,5];case 4:return c.sent(),[2];case 5:return[2]}}))}))},t.prototype.onSubChange_=function(e){return Object(c["__awaiter"])(this,void 0,void 0,(function(){var e,t,n,r,o;return Object(c["__generator"])(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,this.getSWRegistration_()];case 1:return e=i.sent(),[3,3];case 2:throw t=i.sent(),f.create("unable-to-resubscribe",{errorInfo:t});case 3:return i.trys.push([3,5,,8]),[4,e.pushManager.getSubscription()];case 4:return i.sent(),[3,8];case 5:return n=i.sent(),r=this.getTokenDetailsModel(),[4,r.getTokenDetailsFromSWScope(e.scope)];case 6:if(o=i.sent(),!o)throw n;return[4,this.deleteToken(o.fcmToken)];case 7:throw i.sent(),n;case 8:return[2]}}))}))},t.prototype.onNotificationClick_=function(e){return Object(c["__awaiter"])(this,void 0,void 0,(function(){var t,n,r,o;return Object(c["__generator"])(this,(function(s){switch(s.label){case 0:return e.notification&&e.notification.data&&e.notification.data[K]?e.action?[2]:(e.stopImmediatePropagation(),e.notification.close(),t=e.notification.data[K],t.notification?(n=t.fcmOptions&&t.fcmOptions.link||t.notification.click_action,n?[4,this.getWindowClient_(n)]:[2]):[2]):[2];case 1:return r=s.sent(),r?[3,3]:[4,self.clients.openWindow(n)];case 2:return r=s.sent(),[3,5];case 3:return[4,r.focus()];case 4:r=s.sent(),s.label=5;case 5:return r?(delete t.notification,delete t.fcmOptions,o=W(i.NOTIFICATION_CLICKED,t),[2,this.attemptToMessageClient_(r,o)]):[2]}}))}))},t.prototype.getNotificationData_=function(e){var t;if(e&&"object"===typeof e.notification){var n=Object(c["__assign"])({},e.notification);return n.data=Object(c["__assign"])({},e.notification.data,(t={},t[K]=e,t)),n}},t.prototype.setBackgroundMessageHandler=function(e){if(!e||"function"!==typeof e)throw f.create("bg-handler-function-expected");this.bgMessageHandler=e},t.prototype.getWindowClient_=function(e){return Object(c["__awaiter"])(this,void 0,void 0,(function(){var t,n,r,o,i;return Object(c["__generator"])(this,(function(s){switch(s.label){case 0:return t=new URL(e,self.location.href).href,[4,A()];case 1:for(n=s.sent(),r=null,o=0;o<n.length;o++)if(i=new URL(n[o].url,self.location.href).href,i===t){r=n[o];break}return[2,r]}}))}))},t.prototype.attemptToMessageClient_=function(e,t){return Object(c["__awaiter"])(this,void 0,void 0,(function(){return Object(c["__generator"])(this,(function(n){if(!e)throw f.create("no-window-client-to-msg");return e.postMessage(t),[2]}))}))},t.prototype.hasVisibleClients_=function(){return Object(c["__awaiter"])(this,void 0,void 0,(function(){var e;return Object(c["__generator"])(this,(function(t){switch(t.label){case 0:return[4,A()];case 1:return e=t.sent(),[2,e.some((function(e){return"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")}))]}}))}))},t.prototype.sendMessageToWindowClients_=function(e){return Object(c["__awaiter"])(this,void 0,void 0,(function(){var t,n,r=this;return Object(c["__generator"])(this,(function(o){switch(o.label){case 0:return[4,A()];case 1:return t=o.sent(),n=W(i.PUSH_MSG_RECEIVED,e),[4,Promise.all(t.map((function(e){return r.attemptToMessageClient_(e,n)})))];case 2:return o.sent(),[2]}}))}))},t.prototype.getSWRegistration_=function(){return Object(c["__awaiter"])(this,void 0,void 0,(function(){return Object(c["__generator"])(this,(function(e){return[2,self.registration]}))}))},t.prototype.getPublicVapidKey_=function(){return Object(c["__awaiter"])(this,void 0,void 0,(function(){var e,t;return Object(c["__generator"])(this,(function(n){switch(n.label){case 0:return[4,this.getSWRegistration_()];case 1:if(e=n.sent(),!e)throw f.create("sw-registration-expected");return[4,this.getVapidDetailsModel().getVapidFromSWScope(e.scope)];case 2:return t=n.sent(),null==t?[2,h]:[2,t]}}))}))},t}(C);function A(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function W(e,t){var n;return n={},n[o.TYPE_OF_MSG]=e,n[o.DATA]=t,n
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}var F="/firebase-messaging-sw.js",U="/firebase-cloud-messaging-push-scope",x=function(e){function t(t){var n=e.call(this,t)||this;return n.registrationToUse=null,n.publicVapidKeyToUse=null,n.messageObserver=null,n.tokenRefreshObserver=null,n.onMessageInternal=Object(u["createSubscribe"])((function(e){n.messageObserver=e})),n.onTokenRefreshInternal=Object(u["createSubscribe"])((function(e){n.tokenRefreshObserver=e})),n.setupSWMessageListener_(),n}return Object(c["__extends"])(t,e),t.prototype.requestPermission=function(){return Object(c["__awaiter"])(this,void 0,void 0,(function(){var e;return Object(c["__generator"])(this,(function(t){switch(t.label){case 0:return"granted"===this.getNotificationPermission_()?[2]:[4,Notification.requestPermission()];case 1:if(e=t.sent(),"granted"===e)return[2];throw"denied"===e?f.create("permission-blocked"):f.create("permission-default")}}))}))},t.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw f.create("sw-registration-expected");if(null!=this.registrationToUse)throw f.create("use-sw-before-get-token");this.registrationToUse=e},t.prototype.usePublicVapidKey=function(e){if("string"!==typeof e)throw f.create("invalid-public-vapid-key");if(null!=this.publicVapidKeyToUse)throw f.create("use-public-key-before-get-token");var t=v(e);if(65!==t.length)throw f.create("public-vapid-key-decryption-failed");this.publicVapidKeyToUse=t},t.prototype.onMessage=function(e,t,n){return"function"===typeof e?this.onMessageInternal(e,t,n):this.onMessageInternal(e)},t.prototype.onTokenRefresh=function(e,t,n){return"function"===typeof e?this.onTokenRefreshInternal(e,t,n):this.onTokenRefreshInternal(e)},t.prototype.waitForRegistrationToActivate_=function(e){var t=e.installing||e.waiting||e.active;return new Promise((function(n,r){if(t)if("activated"!==t.state)if("redundant"!==t.state){var o=function(){if("activated"===t.state)n(e);else{if("redundant"!==t.state)return;r(f.create("sw-reg-redundant"))}t.removeEventListener("statechange",o)};t.addEventListener("statechange",o)}else r(f.create("sw-reg-redundant"));else n(e);else r(f.create("no-sw-in-reg"))}))},t.prototype.getSWRegistration_=function(){var e=this;return this.registrationToUse?this.waitForRegistrationToActivate_(this.registrationToUse):(this.registrationToUse=null,navigator.serviceWorker.register(F,{scope:U}).catch((function(e){throw f.create("failed-serviceworker-registration",{browserErrorMessage:e.message})})).then((function(t){return e.waitForRegistrationToActivate_(t).then((function(){return e.registrationToUse=t,t.update(),t}))})))},t.prototype.getPublicVapidKey_=function(){return Object(c["__awaiter"])(this,void 0,void 0,(function(){return Object(c["__generator"])(this,(function(e){return this.publicVapidKeyToUse?[2,this.publicVapidKeyToUse]:[2,h]}))}))},t.prototype.setupSWMessageListener_=function(){var e=this;navigator.serviceWorker.addEventListener("message",(function(t){if(t.data&&t.data[o.TYPE_OF_MSG]){var n=t.data;switch(n[o.TYPE_OF_MSG]){case i.PUSH_MSG_RECEIVED:case i.NOTIFICATION_CLICKED:var r=n[o.DATA];e.messageObserver&&e.messageObserver.next(r);break;default:break}}}),!1)},t}(C);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function E(e){var t="messaging",n=function(e){if(!R())throw f.create("unsupported-browser");return self&&"ServiceWorkerGlobalScope"in self?new V(e):new x(e)},r={isSupported:R};e.INTERNAL.registerService(t,n,r)}function R(){return self&&"ServiceWorkerGlobalScope"in self?H():L()}function L(){return navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}function H(){return"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}E(a.a)}}]);
//# sourceMappingURL=firebase-messaging.cc420f37.js.map