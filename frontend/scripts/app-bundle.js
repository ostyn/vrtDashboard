var __decorate=this&&this.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(t,e,r,n);else for(var u=t.length-1;u>=0;u--)if(a=t[u])i=(o<3?a(i):o>3?a(e,r,i):a(e,r))||i;return o>3&&i&&Object.defineProperty(e,r,i),i};var __metadata=this&&this.__metadata||function(t,e){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(t,e)};var __awaiter=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))(function(o,i){function a(t){try{s(n.next(t))}catch(t){i(t)}}function u(t){try{s(n["throw"](t))}catch(t){i(t)}}function s(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(a,u)}s((n=n.apply(t,e||[])).next())})};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(t){return function(e){return s([t,e])}}function s(a){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,o&&(i=a[0]&2?o["return"]:a[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;if(o=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;o=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){r.label=a[1];break}if(a[0]===6&&r.label<i[1]){r.label=i[1];i=a;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(a);break}if(i[2])r.ops.pop();r.trys.pop();continue}a=e.call(t,r)}catch(t){a=[6,t];o=0}finally{n=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};define("RouteInfoService",["require","exports","./VrtDao","aurelia-framework"],function(t,e,r,n){"use strict";Object.defineProperty(e,"__esModule",{value:true});var o=function(){function t(t){this.routesMap=new Map;this.vrtDao=t}t.prototype.getAllRoutes=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:if(!!this.routes)return[3,2];t=this;return[4,this.vrtDao.getRoutes()];case 1:t.routes=e.sent();this.routes.sort(function(t,e){var r=/\d+/g;var n=t.shortName.match(r)[0];var o=e.shortName.match(r)[0];return n-o});this.buildRouteHashMap();e.label=2;case 2:return[2,this.routes]}})})};t.prototype.buildRouteHashMap=function(){var t=this;this.routes.forEach(function(e){t.routesMap.set(e.shortName,e)})};t.prototype.getRouteColor=function(t){var e=this.routesMap.get(t);if(e)return e["routeColor"];return"#ffffff"};t=__decorate([n.inject(r.VrtDao),__metadata("design:paramtypes",[r.VrtDao])],t);return t}();e.RouteInfoService=o});var __decorate=this&&this.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(t,e,r,n);else for(var u=t.length-1;u>=0;u--)if(a=t[u])i=(o<3?a(i):o>3?a(e,r,i):a(e,r))||i;return o>3&&i&&Object.defineProperty(e,r,i),i};var __metadata=this&&this.__metadata||function(t,e){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(t,e)};define("VrtDao",["require","exports","aurelia-framework","aurelia-fetch-client"],function(t,e,r,n){"use strict";Object.defineProperty(e,"__esModule",{value:true});var o=function(){function t(t){this.http=t}t.prototype.getRoutes=function(){return this.http.fetch("https://vrt.routematch.com/feed/masterRoute").then(function(t){return t.json()}).then(function(t){return t.data}).catch(function(t){console.log(t)})};t.prototype.getStopsOnRoute=function(t){return this.http.fetch("https://vrt.routematch.com/feed/stops/"+t).then(function(t){return t.json()}).then(function(t){return t}).catch(function(t){console.log(t)})};t.prototype.getStatusForStop=function(t){return this.http.fetch("https://vrt.routematch.com/feed/departures/byStop/"+t).then(function(t){return t.json()}).then(function(t){return t}).catch(function(t){console.log(t)})};t=__decorate([r.inject(n.HttpClient),__metadata("design:paramtypes",[Object])],t);return t}();e.VrtDao=o});define("app",["require","exports"],function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:true});var r=function(){function t(){}t.prototype.configureRouter=function(t,e){this.router=e;t.title="VRT Dashboard";t.map([{route:["","bus"],name:"bus",moduleId:"bus-tracker",title:"Home"}])};return t}();e.App=r});define("text!app.html",[],function(){return'<template>\n  <ul repeat.for="nav of router.navigation">\n      <li class="${nav.isActive ? \'active\' : \'\'}"><a href.bind="nav.href">${nav.title}</a></li>\n  </ul>\n  <router-view></router-view>\n</template>'});var __decorate=this&&this.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(t,e,r,n);else for(var u=t.length-1;u>=0;u--)if(a=t[u])i=(o<3?a(i):o>3?a(e,r,i):a(e,r))||i;return o>3&&i&&Object.defineProperty(e,r,i),i};var __metadata=this&&this.__metadata||function(t,e){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(t,e)};var __awaiter=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))(function(o,i){function a(t){try{s(n.next(t))}catch(t){i(t)}}function u(t){try{s(n["throw"](t))}catch(t){i(t)}}function s(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(a,u)}s((n=n.apply(t,e||[])).next())})};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(t){return function(e){return s([t,e])}}function s(a){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,o&&(i=a[0]&2?o["return"]:a[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;if(o=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;o=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){r.label=a[1];break}if(a[0]===6&&r.label<i[1]){r.label=i[1];i=a;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(a);break}if(i[2])r.ops.pop();r.trys.pop();continue}a=e.call(t,r)}catch(t){a=[6,t];o=0}finally{n=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};define("bus-tracker",["require","exports","aurelia-framework","VrtDao","RouteInfoService","aurelia-router"],function(t,e,r,n,o,i){"use strict";Object.defineProperty(e,"__esModule",{value:true});var a=function(){function t(t,e,r){var n=this;this.currentStop=undefined;this.currentRoute=undefined;this.selectedRoute=undefined;this.selectedStop=undefined;this.notCurrentlyRequesting=true;this.interval=undefined;this.getStatusForCurrentStop=function(){if(n.currentStop&&n.notCurrentlyRequesting){n.notCurrentlyRequesting=false;n.vrtDao.getStatusForStop(n.currentStop).then(function(t){n.notCurrentlyRequesting=true;n.currentStopInfo=t})}};this.vrtDao=t;this.router=e;this.routeInfoService=r;setInterval(function(){return n.updateTimeSinceLastDataTimestamp()},1e3)}t.prototype.selectedRouteChanged=function(t,e){var r=this;this.stops=undefined;if(this.selectedRoute){this.currentRoute=this.selectedRoute;this.vrtDao.getStopsOnRoute(this.currentRoute.routeId).then(function(t){t.data.forEach(function(t){if(t.stopId==r.currentStop)r.selectedStop=t});r.stops=t})}};t.prototype.selectedStopChanged=function(t,e){if(this.selectedStop){this.currentStopInfo=undefined;this.currentStop=this.selectedStop.stopId;if(this.interval)clearInterval(this.interval);this.getStatusForCurrentStop();this.interval=setInterval(this.getStatusForCurrentStop,1e4);this.router.navigate(this.router.generate("bus",{stopId:this.currentStop,route:this.currentRoute.shortName}))}};t.prototype.determineActivationStrategy=function(){return i.activationStrategy.noChange};t.prototype.activate=function(t,e,r){return __awaiter(this,void 0,void 0,function(){var e;var r=this;return __generator(this,function(n){switch(n.label){case 0:this.currentRoute=t.shortName;this.currentStop=t.stopId;e=this;return[4,this.routeInfoService.getAllRoutes()];case 1:e.routes=n.sent();this.routes.forEach(function(e){if(e.shortName==t.route)r.selectedRoute=e;r.currentRoute=r.selectedRoute});return[2]}})})};t.prototype.updateTimeSinceLastDataTimestamp=function(){if(this.currentStopInfo)this.timeSinceLastDataTimestamp=Math.round(((new Date).getTime()-new Date(this.currentStopInfo.time).getTime())/1e3)};t.prototype.arrivalText=function(t){return t.routeLongName+": "+t.status+" to "+t.destination};t.prototype.getRouteStyle=function(t){var e=this.routeInfoService.getRouteColor(t);return{background:e,color:this.getColorByBgColor(e),padding:"10px"}};t.prototype.getColorByBgColor=function(t){var e=t.charAt(0)==="#"?t.substring(1,7):t;var r=parseInt(e.substring(0,2),16);var n=parseInt(e.substring(2,4),16);var o=parseInt(e.substring(4,6),16);return r*.299+n*.587+o*.114>186?"#000000":"#ffffff"};__decorate([r.observable,__metadata("design:type",Object)],t.prototype,"selectedRoute",void 0);__decorate([r.observable,__metadata("design:type",Object)],t.prototype,"selectedStop",void 0);t=__decorate([r.inject(n.VrtDao,i.Router,o.RouteInfoService),__metadata("design:paramtypes",[Object,Object,Object])],t);return t}();e.BusTracker=a});define("text!bus-tracker.html",[],function(){return'<template>\r\n    <require from="style.css"></require>\r\n    <div class="page">\r\n        <div class="controlArea">\r\n            <select style.bind="getRouteStyle(currentRoute.shortName)" if.bind="routes" value.bind="selectedRoute">\r\n                <option model.bind="undefined">Choose...</option>\r\n                <option style.bind="getRouteStyle(route.shortName)" repeat.for="route of routes" model.bind="route">\r\n                    ${route.shortName} - ${route.longName}\r\n                </option>\r\n            </select>\r\n            <select style.bind="getRouteStyle(currentRoute.shortName)" if.bind="stops" value.bind="selectedStop">\r\n                <option model.bind="undefined">Choose...</option>\r\n                <option repeat.for="stop of stops.data" model.bind="stop">\r\n                    ${stop.stopDescription}(${stop.stopId})\r\n                </option>\r\n            </select>\r\n        </div>\r\n        <div class="arrivalContainer">\r\n            <div class="arrival" if.bind="currentStopInfo" repeat.for="arriving of currentStopInfo.data">\r\n                <span class="arrivalText" style.bind="getRouteStyle(arriving.routeShortName)" innerhtml.bind="arrivalText(arriving)"></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="footer">\r\n        <div class="refreshIndicator" if.bind="!notCurrentlyRequesting">Refreshing...</div>\r\n        <div if.bind="currentStopInfo">Estimates are ${timeSinceLastDataTimestamp} seconds old</div>\r\n    </div>\r\n</template>'});define("environment",["require","exports"],function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default={debug:false,testing:false}});define("main",["require","exports","./environment"],function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:true});function n(t){t.use.standardConfiguration().feature("resources");t.use.developmentLogging(r.default.debug?"debug":"warn");if(r.default.testing){t.use.plugin("aurelia-testing")}return t.start().then(function(){return t.setRoot()})}e.configure=n});define("resources/index",["require","exports"],function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:true});function r(t){}e.configure=r});define("text!style.css",[],function(){return".arrival {\r\n    margin: 5px;\r\n}\r\n.arrivalText {\r\n    border: black solid 2px;\r\n    border-radius: 5px;\r\n    display: block;\r\n}\r\n.controlArea{\r\n    margin: 5px;\r\n}\r\n.footer {\r\n    position: fixed;\r\n    bottom: 0;\r\n    margin: 10px;\r\n    width: 100%;\r\n}\r\n.arrivalContainer {\r\n    max-width: 400px;\r\n}\r\nbody {\r\n    margin: 0px;\r\n}\r\n.page {\r\n    margin: 8px;\r\n}"});define("resources",["resources/index"],function(t){return t});