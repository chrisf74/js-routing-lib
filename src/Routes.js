import {history} from 'backbone';
import Router from './Router';
import Route from './Route';

export default class Routes {
	constructor(RouteClass) {
		this._RouteClass = RouteClass || Route;
		this._router = new Router();
	}

	mapRoute(url, props) {
		let RouteClass = this._RouteClass;
		switch (typeof props) {
			case 'function':
				RouteClass = props;
				break;

			case 'object':
				class RouteClass extends this._RouteClass {};
				Object.assign(RouteClass.prototype, props);
				break;
		}

		let route = new RouteClass(url, this);
		let {urlPattern, onMatch} = route;
		this._router.route(urlPattern, '', onMatch.bind(route));
		return route;
	}

	navigateToUrl(url, options = {trigger: true}) {
		this._router.navigate(url, options);
	}

	startHistory(options) {
		history.start(options);
	}
};