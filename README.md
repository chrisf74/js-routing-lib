# routing-js
Javascript routing framework built on Backbone.js and written in es6.

## Dependencies
1. [Backbone.js](http://backbonejs.org/)
2. [Babel](http://babeljs.io/)

## Example Usage
Extend Route class

```javascript
// routes/AppRoute.js
		
import Route from './path/to/routing-js/files/Route';
class AppRoute extends Route {
	action(params) {
		// do something to change page view
	}
};
```

Define routes instance

```javascript
// routes/index.js
		
import AppRoute from './AppRoute';
import Routes from './path/to/routing-js/files//Routes';
let routes = new Routes(AppRoute);

// Instance of AppRoute
routes.showHome = routes.mapRoute('');

// Instance of AppRoute with custom props
routes.showUser = routes.mapRoute('users/:userId', {
	// custom props...
});

class ListUsersRoute extends AppRoute {
	// extend AppRoute class
};

// Instance of ListUsersRoute
routes.listUsers = routes.map('users', ListUsersRoute);

// Export routes instance
export default routes;
```

Import routes instance and start history

```javascript
// App.js
		
import routes from './routes/';
// Render app...
routes.startHistory();
```
