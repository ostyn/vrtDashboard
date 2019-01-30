import { PLATFORM } from "aurelia-pal";

export class App {
  router: any;
  configureRouter(config, router) {
    this.router = router;
    config.title = 'VRT Dashboard';
    config.map([
      { route: ['', 'bus'], name: 'bus', moduleId: "bus-tracker", title: 'Home' }
    ]);
  }
}