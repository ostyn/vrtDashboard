var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('RouteInfoService',["require", "exports", "./VrtDao", "aurelia-framework"], function (require, exports, VrtDao_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RouteInfoService = (function () {
        function RouteInfoService(vrtDao) {
            this.routesMap = new Map();
            this.vrtDao = vrtDao;
        }
        RouteInfoService.prototype.getAllRoutes = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!!this.routes) return [3, 2];
                            _a = this;
                            return [4, this.vrtDao.getRoutes()];
                        case 1:
                            _a.routes = _b.sent();
                            this.routes.sort(function (a, b) {
                                var numberPattern = /\d+/g;
                                var routeANumber = a.shortName.match(numberPattern)[0];
                                var routeBNumber = b.shortName.match(numberPattern)[0];
                                return routeANumber - routeBNumber;
                            });
                            this.buildRouteHashMap();
                            _b.label = 2;
                        case 2: return [2, this.routes];
                    }
                });
            });
        };
        RouteInfoService.prototype.buildRouteHashMap = function () {
            var _this = this;
            this.routes.forEach(function (route) {
                _this.routesMap.set(route.shortName, route);
            });
        };
        RouteInfoService.prototype.getRouteColor = function (shortName) {
            var route = this.routesMap.get(shortName);
            if (route)
                return route["routeColor"];
            return '#ffffff';
        };
        RouteInfoService = __decorate([
            aurelia_framework_1.inject(VrtDao_1.VrtDao),
            __metadata("design:paramtypes", [VrtDao_1.VrtDao])
        ], RouteInfoService);
        return RouteInfoService;
    }());
    exports.RouteInfoService = RouteInfoService;
});


;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('VrtDao',["require", "exports", "aurelia-framework", "aurelia-fetch-client"], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var VrtDao = (function () {
        function VrtDao(http) {
            this.http = http;
        }
        VrtDao.prototype.getRoutes = function () {
            return this.http.fetch('https://vrt.routematch.com/feed/masterRoute')
                .then(function (response) {
                return response.json();
            })
                .then(function (data) {
                return data.data;
            })
                .catch(function (ex) {
                console.log(ex);
            });
        };
        VrtDao.prototype.getStopsOnRoute = function (route) {
            return this.http.fetch('https://vrt.routematch.com/feed/stops/' + route)
                .then(function (response) {
                return response.json();
            })
                .then(function (data) {
                return data;
            })
                .catch(function (ex) {
                console.log(ex);
            });
        };
        VrtDao.prototype.getStatusForStop = function (stop) {
            return this.http.fetch('https://vrt.routematch.com/feed/departures/byStop/' + stop)
                .then(function (response) {
                return response.json();
            })
                .then(function (data) {
                return data;
            })
                .catch(function (ex) {
                console.log(ex);
            });
        };
        VrtDao = __decorate([
            aurelia_framework_1.inject(aurelia_fetch_client_1.HttpClient),
            __metadata("design:paramtypes", [Object])
        ], VrtDao);
        return VrtDao;
    }());
    exports.VrtDao = VrtDao;
});


;
define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = 'VRT Dashboard';
            config.map([
                { route: ['', 'bus'], name: 'bus', moduleId: "bus-tracker", title: 'Home' }
            ]);
        };
        return App;
    }());
    exports.App = App;
});


;
define('text!app.html',[],function(){return "<template>\n  <ul repeat.for=\"nav of router.navigation\">\n      <li class=\"${nav.isActive ? 'active' : ''}\"><a href.bind=\"nav.href\">${nav.title}</a></li>\n  </ul>\n  <router-view></router-view>\n</template>";});;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('bus-tracker',["require", "exports", "aurelia-framework", "VrtDao", "RouteInfoService", "aurelia-router"], function (require, exports, aurelia_framework_1, VrtDao_1, RouteInfoService_1, aurelia_router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BusTracker = (function () {
        function BusTracker(vrtDao, router, routeInfoService) {
            var _this = this;
            this.currentStop = undefined;
            this.currentRoute = undefined;
            this.selectedRoute = undefined;
            this.selectedStop = undefined;
            this.notCurrentlyRequesting = true;
            this.interval = undefined;
            this.getStatusForCurrentStop = function () {
                if (_this.currentStop && _this.notCurrentlyRequesting) {
                    _this.notCurrentlyRequesting = false;
                    _this.vrtDao.getStatusForStop(_this.currentStop)
                        .then(function (info) {
                        _this.notCurrentlyRequesting = true;
                        _this.currentStopInfo = info;
                    });
                }
            };
            this.vrtDao = vrtDao;
            this.router = router;
            this.routeInfoService = routeInfoService;
            setInterval(function () { return _this.updateTimeSinceLastDataTimestamp(); }, 1000);
        }
        BusTracker.prototype.selectedRouteChanged = function (newVal, oldVal) {
            var _this = this;
            this.stops = undefined;
            if (this.selectedRoute) {
                this.currentRoute = this.selectedRoute;
                this.vrtDao.getStopsOnRoute(this.currentRoute.routeId)
                    .then(function (stops) {
                    var dedupedStops = {};
                    for (var i = 0; i < stops.data.length; i++) {
                        var stop_1 = stops.data[i];
                        dedupedStops[stop_1.stopId] = stop_1;
                        if (stop_1.stopId == _this.currentStop)
                            _this.selectedStop = stop_1;
                    }
                    _this.stops = Object.values(dedupedStops);
                    _this.stops.sort(function (a, b) {
                        return a.stopName.localeCompare(b.stopName);
                    });
                });
            }
        };
        BusTracker.prototype.selectedStopChanged = function (newVal, oldVal) {
            if (this.selectedStop) {
                this.currentStopInfo = undefined;
                this.currentStop = this.selectedStop.stopId;
                if (this.interval)
                    clearInterval(this.interval);
                this.getStatusForCurrentStop();
                this.interval = setInterval(this.getStatusForCurrentStop, 10000);
                this.router.navigate(this.router.generate('bus', {
                    stopId: this.currentStop,
                    route: this.currentRoute.shortName
                }));
            }
        };
        BusTracker.prototype.determineActivationStrategy = function () {
            return aurelia_router_1.activationStrategy.noChange;
        };
        BusTracker.prototype.activate = function (params, routeConfig, navigationInstruction) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.currentRoute = params.shortName;
                            this.currentStop = params.stopId;
                            _a = this;
                            return [4, this.routeInfoService.getAllRoutes()];
                        case 1:
                            _a.routes = _b.sent();
                            this.routes.forEach(function (route) {
                                if (route.shortName == params.route)
                                    _this.selectedRoute = route;
                                _this.currentRoute = _this.selectedRoute;
                            });
                            return [2];
                    }
                });
            });
        };
        BusTracker.prototype.updateTimeSinceLastDataTimestamp = function () {
            if (this.currentStopInfo)
                this.timeSinceLastDataTimestamp = Math.round((new Date().getTime() - new Date(this.currentStopInfo.time).getTime()) / 1000);
        };
        BusTracker.prototype.getArrivalText = function (arriving) {
            var currentDate = new Date().getTime();
            var eta = Math.max(Math.round((Date.parse(arriving.predictedArrivalTime) - currentDate) / 1000 / 60), 0);
            var optionalArrivalInfo = '';
            if (arriving.timePoint && arriving.arriveComplete)
                optionalArrivalInfo = 'At Stop';
            else if ((arriving.timePoint))
                optionalArrivalInfo = 'Arriving in ' + eta + ' min';
            return optionalArrivalInfo;
        };
        BusTracker.prototype.getDepartureText = function (arriving) {
            var currentDate = new Date().getTime();
            var etd = Math.max(Math.round((Date.parse(arriving.predictedDepartureTime) - currentDate) / 1000 / 60), 0);
            return "Departing in " + etd + " min";
        };
        BusTracker.prototype.getRouteStyle = function (routeShortName) {
            var color = this.routeInfoService.getRouteColor(routeShortName);
            return {
                'background': color,
                'color': this.getColorByBgColor(color),
                'padding': '5px'
            };
        };
        BusTracker.prototype.getColorByBgColor = function (bgColor) {
            var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
            var r = parseInt(color.substring(0, 2), 16);
            var g = parseInt(color.substring(2, 4), 16);
            var b = parseInt(color.substring(4, 6), 16);
            return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ?
                '#000000' : '#ffffff';
        };
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], BusTracker.prototype, "selectedRoute", void 0);
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", Object)
        ], BusTracker.prototype, "selectedStop", void 0);
        BusTracker = __decorate([
            aurelia_framework_1.inject(VrtDao_1.VrtDao, aurelia_router_1.Router, RouteInfoService_1.RouteInfoService),
            __metadata("design:paramtypes", [Object, Object, Object])
        ], BusTracker);
        return BusTracker;
    }());
    exports.BusTracker = BusTracker;
});


;
define('text!bus-tracker.html',[],function(){return "<template>\r\n    <require from=\"style.css\"></require>\r\n    <div class=\"page\">\r\n        <div class=\"controlArea\">\r\n            <select style.bind=\"getRouteStyle(currentRoute.shortName)\" if.bind=\"routes\" value.bind=\"selectedRoute\">\r\n                <option model.bind=\"undefined\">Choose...</option>\r\n                <option style.bind=\"getRouteStyle(route.shortName)\" repeat.for=\"route of routes\" model.bind=\"route\">\r\n                    ${route.shortName} - ${route.longName}\r\n                </option>\r\n            </select>\r\n            <select style.bind=\"getRouteStyle(currentRoute.shortName)\" if.bind=\"stops\" value.bind=\"selectedStop\">\r\n                <option model.bind=\"undefined\">Choose...</option>\r\n                <option repeat.for=\"stop of stops\" model.bind=\"stop\">\r\n                    ${stop.stopDescription}(${stop.stopId})\r\n                </option>\r\n            </select>\r\n        </div>\r\n        <div class=\"arrivalContainer\">\r\n            <div class=\"arrival\" if.bind=\"currentStopInfo\" repeat.for=\"arriving of currentStopInfo.data\">\r\n                <span class=\"routeName\">\r\n                    <span class=\"routeNumber\"\r\n                        style.bind=\"getRouteStyle(arriving.routeShortName)\">${arriving.masterRouteShortName}</span>\r\n                    <span>\r\n                        <div>${arriving.routeLongName}</div>\r\n                        <div>${arriving.destination}</div>\r\n                    </span>\r\n                </span>\r\n                <span class=\"timingInfo\">\r\n                    <div>${getArrivalText(arriving)}</div>\r\n                    <div>${getDepartureText(arriving)}</div>\r\n                </span>\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"footer\">\r\n        <div if.bind=\"currentStopInfo\">Estimates are ${timeSinceLastDataTimestamp} seconds old. <span\r\n                class=\"refreshIndicator\" if.bind=\"!notCurrentlyRequesting\">Refreshing...</span></div>\r\n    </div>\r\n</template>";});;
define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});


;
define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        aurelia.use.developmentLogging(environment_1.default.debug ? 'debug' : 'warn');
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        return aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});


;
define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});


;
define('text!style.css',[],function(){return "html {\r\n    height: 80%;\r\n}\r\nbody {\r\n    height: 100%;\r\n}\r\n.arrival {\r\n    margin: 5px;\r\n    display: flex;\r\n    background-color: #eeeeee;\r\n    padding: 10px;\r\n    border-radius: 3px;\r\n    justify-content: space-between;\r\n}\r\n.arrivalText {\r\n    border: black solid 2px;\r\n    border-radius: 5px;\r\n    display: block;\r\n    width: 100%;\r\n    padding-top: 0px;\r\n}\r\n.controlArea{\r\n    margin: 5px;\r\n}\r\n.footer {\r\n    position: fixed;\r\n    bottom: 0;\r\n    padding: 10px;\r\n    width: 100%;\r\n    background: #eeeeee;\r\n    height: 20px;\r\n}\r\n.arrivalContainer {\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-flow: wrap column;\r\n    flex-flow: wrap column;\r\n    max-height: 100%;\r\n}\r\n\r\nbody {\r\n    margin: 0px;\r\n    font-family: 'Assistant', sans-serif;\r\n    font-size: 18px;\r\n}\r\n.page {\r\n    margin: 8px;\r\n    padding-bottom: 40px;\r\n    height: 100%;\r\n    display: inline-block;\r\n}\r\n.routeNumber {\r\n    width: 20px;\r\n    height: 20px;\r\n    margin: 5px;\r\n    margin-right: 15px;\r\n    border-radius: 20px;\r\n    font-size: 18px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.routeName {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.timingInfo {\r\n    text-align: right;\r\n}";});;
define('resources',['resources/index'],function(m){return m;});
//# sourceMappingURL=app-bundle.js.map