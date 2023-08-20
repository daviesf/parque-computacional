"use strict";

var _startServer = _interopRequireDefault(require("./startServer.js"));
var _resolvers = _interopRequireDefault(require("./graphql/resolvers.js"));
var _typeDefs = _interopRequireDefault(require("./graphql/typeDefs.js"));
function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}
(0, _startServer["default"])({
	typeDefs: _typeDefs["default"],
	resolvers: _resolvers["default"],
});
