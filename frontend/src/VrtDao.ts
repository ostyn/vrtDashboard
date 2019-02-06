import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
@inject(HttpClient)
export class VrtDao {
    http: any;
    constructor(http) {
        this.http = http;
    }
    getRoutes() {
        return this.http.fetch('https://vrt.routematch.com/feed/masterRoute')
            .then(response => {
                return response.json();
            })
            .then(data => {
                return data.data;
            })
            .catch(ex => {
                console.log(ex);
            });
    }
    getStopsOnRoute(route) {
        return this.http.fetch('https://vrt.routematch.com/feed/stops/' + route)
            .then(response => {
                return response.json();
            })
            .then(data => {
                return data;
            })
            .catch(ex => {
                console.log(ex);
            });
    }
    getStatusForStop(stop) {
        return this.http.fetch('https://vrt.routematch.com/feed/departures/byStop/' + stop)
            .then(response => {
                return response.json();
            })
            .then(data => {
                return data;
            })
            .catch(ex => {
                console.log(ex);
            });
    }
}