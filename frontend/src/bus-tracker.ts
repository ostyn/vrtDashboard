import { inject, observable } from 'aurelia-framework';
import { VrtDao } from "VrtDao";
import { RouteInfoService } from "RouteInfoService";
import {Router, activationStrategy} from 'aurelia-router';
@inject(VrtDao, Router, RouteInfoService)
export class BusTracker {
    currentStop = undefined;
    currentRoute = undefined;
    @observable selectedRoute = undefined;
    @observable selectedStop = undefined;
    notCurrentlyRequesting = true;
    interval = undefined;
    stops: any;
    vrtDao: any;
    currentStopInfo: any;
    router: any;
    routes: any;
    timeSinceLastDataTimestamp: number;
    routeInfoService: any;
    selectedRouteChanged(newVal, oldVal) {
        this.stops = undefined;
        if (this.selectedRoute) {
            this.currentRoute = this.selectedRoute;
            this.vrtDao.getStopsOnRoute(this.currentRoute.routeId)
                .then((stops) => {
                    let dedupedStops = {};
                    for(let i = 0; i< stops.data.length; i++)
                    {
                        let stop = stops.data[i];
                        dedupedStops[stop.stopId] = stop;
                        if (stop.stopId == this.currentStop)
                            this.selectedStop = stop;
                    }
                    this.stops = Object.values(dedupedStops);
                    this.stops.sort(
                        (a, b) => {
                            return a.stopName.localeCompare(b.stopName);
                        }
                    );
                });
        }
    }
    selectedStopChanged(newVal, oldVal) {
        if (this.selectedStop) {
            this.currentStopInfo = undefined;
            this.currentStop = this.selectedStop.stopId;
            if (this.interval)
                clearInterval(this.interval);
            this.getStatusForCurrentStop();
            this.interval = setInterval(this.getStatusForCurrentStop, 10000);
            this.router.navigate(this.router.generate('bus', {
                stopId : this.currentStop,
                route : this.currentRoute.shortName
            }));
        }
    }
    determineActivationStrategy(){
        return activationStrategy.noChange;
    }
    async activate(params, routeConfig, navigationInstruction) {
        this.currentRoute = params.shortName;
        this.currentStop = params.stopId;
        this.routes = await this.routeInfoService.getAllRoutes();
        this.routes.forEach(route => {
            if (route.shortName == params.route)
                this.selectedRoute = route;
                this.currentRoute = this.selectedRoute;
        });
    }

    getStatusForCurrentStop = () => {
        if (this.currentStop && this.notCurrentlyRequesting) {
            this.notCurrentlyRequesting = false;
            this.vrtDao.getStatusForStop(this.currentStop)
                .then((info) => {
                    this.notCurrentlyRequesting = true;
                    this.currentStopInfo = info;
                });
        }
    }
    updateTimeSinceLastDataTimestamp() {
        if(this.currentStopInfo)
            this.timeSinceLastDataTimestamp = Math.round((new Date().getTime() - new Date(this.currentStopInfo.time).getTime())/1000);
    }

    constructor(vrtDao, router, routeInfoService) {
        this.vrtDao = vrtDao;
        this.router = router;
        this.routeInfoService = routeInfoService
        setInterval(() => this.updateTimeSinceLastDataTimestamp(), 1000);
    }
    getArrivalText(arriving)
    {
        let currentDate = new Date().getTime();
        let eta= Math.max(Math.round((Date.parse(arriving.predictedArrivalTime)-currentDate)/1000/60),0);
        let optionalArrivalInfo = '';
        if(arriving.timePoint && arriving.arriveComplete)
            optionalArrivalInfo = 'At Stop';
        else if((arriving.timePoint))
            optionalArrivalInfo = 'Arriving in ' + eta + ' min';
        return optionalArrivalInfo
    }
    getDepartureText(arriving) {
        let currentDate = new Date().getTime();
        let etd= Math.max(Math.round((Date.parse(arriving.predictedDepartureTime)-currentDate)/1000/60),0);
        return `Departing in ${etd} min`;
    }
    getRouteStyle(routeShortName) {
        let color = this.routeInfoService.getRouteColor(routeShortName);
        return {
            'background':color, 
            'color':this.getColorByBgColor(color),
            'padding': '5px'
        };
    }
    getColorByBgColor(bgColor) {
        var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
        var r = parseInt(color.substring(0, 2), 16); // hexToR
        var g = parseInt(color.substring(2, 4), 16); // hexToG
        var b = parseInt(color.substring(4, 6), 16); // hexToB
        return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ?
          '#000000' : '#ffffff';
      }
}