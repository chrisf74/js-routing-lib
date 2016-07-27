# js-routing-lib
Client side routing solution built on top of [backbone](http://backbonejs.org/) and written in es6.

## Dependencies
1. [Backbone](http://backbonejs.org/)
2. [Babel](http://babeljs.io/)

## Example Usage
1. Extend Route class
		// routes/AppRoute.js
		import Route from './path/to/js-routing-lib/Route';
		class AppRoute extends Route {
			action(params) {
				// do something to change page view
			}
		}

2. Define routes
		// routes/index.js
		import AppRoute from './AppRoute';
		import Routes from './path/to/js-routing-lib/Routes';
		let routes = new Routes(AppRoute);

		// Instance of AppRoute
		routes.showHome = routes.mapRoute('');

		// Instance of AppRoute with custom props
		routes.showUser = routes.mapRoute('users/:userId', {
			// custom props...
		});

		class ListUsersRoute extends AppRoute {
			// extend AppRoute class
		}

		// Instance of ListUsersRoute
		routes.listUsers = routes.map('users', ListUsersRoute);

		// Export routes instance
		export default routes;

3. Import routes instance and start history
		// App.js
		import routes from 'routes/';
		// Render app...
		routes.startHistory();
