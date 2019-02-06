import { VrtDao } from "./VrtDao";
import { inject } from "aurelia-framework";
@inject(VrtDao)
export class RouteInfoService {
    vrtDao: VrtDao;
    routes: any;
    routesMap: Map<string,object> = new Map();
    constructor(vrtDao: VrtDao) {
        this.vrtDao = vrtDao;
    }
    async getAllRoutes() {
        if (!this.routes) {
            this.routes = await this.vrtDao.getRoutes();
            this.routes.sort(
                (a, b) => {
                    var numberPattern = /\d+/g;
                    var routeANumber = a.shortName.match(numberPattern)[0];
                    var routeBNumber = b.shortName.match(numberPattern)[0];
                    return routeANumber - routeBNumber;
                }
            );
            this.buildRouteHashMap();
        }
        return this.routes;
    }
    buildRouteHashMap(){
        this.routes.forEach(route => {
            this.routesMap.set(route.shortName, route);
        });
    }
    getRouteColor(shortName){
        return this.routesMap.get(shortName)["routeColor"];
    }
}