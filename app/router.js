import EmberRouter from '@ember/routing/router';
import config from 'my-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

<<<<<<< HEAD
Router.map(function() {
  this.route('about');
  this.route('skills');
});

export default Router;
=======
Router.map(function () {});
>>>>>>> 9097a7f (message)
