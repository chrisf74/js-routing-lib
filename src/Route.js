export default class Route {
	constructor(urlPattern, routes) {
		this.urlPattern = urlPattern;
		this._routes = routes;
	}

	getParamKeys() {
		let matchedKeys;
		if (typeof this.urlPattern == 'string') {
			matchedKeys = this.urlPattern.match(/(\(\?)?:\w+/g) || [];
			return matchedKeys.map(key => key.replace(':', ''));
		}
	}

	getParams(...paramValues) {
		let paramKeys = this.getParamKeys();
		let params = {};
		paramKeys.forEach((key, index) => params[key] = paramValues[index]);
		return params;
	}

	onMatch(...paramValues) {
		let params = this.getParams(...paramValues);
		this.action(params);
	}

	getUrl(params = {}) {
		let url = this.urlPattern;
		Object.keys(params).forEach(key => {
			url = url.replace(`:${key}`, `${params[key]}`);
		});
		return url;
	}

	navigate(params, options) {
		let url = this.getUrl(params);
		this._routes.navigateToUrl(url, options);
	}
};