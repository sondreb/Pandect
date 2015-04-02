import {Router} from 'aurelia-router';

export class ChildRouter{
  static inject() { return [Router]; }
  constructor(router){
    this.heading = 'Child Router';
    this.router = router;
    router.configure(config => {
      config.map([
        { route: ['','add'],  moduleId: './add', nav: true, title:'+', icon: 'plus' },
		{ route: ['','extensions'],  moduleId: './extensions',  nav: true, title:'legal', icon: 'plus' },
		{ route: ['','heartbeat'],  moduleId: './heartbeat',  nav: true, title:'fa-heartbeat', icon: 'fa-heartbeat' },
	 	{ route: ['','welcome'],  moduleId: './welcome',      nav: true, title:'Welcome' },
        { route: 'flickr',        moduleId: './flickr',       nav: true },
        { route: 'child-router',  moduleId: './child-router', nav: true, title:'Child Router' }
      ]);
    });
  }
}
