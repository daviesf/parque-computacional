"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true,
});
exports["default"] = void 0;
var _apolloServer = require("apollo-server");
function startServer(_ref) {
	var typeDefs = _ref.typeDefs,
		resolvers = _ref.resolvers;
	var server = new _apolloServer.ApolloServer({
		typeDefs: typeDefs,
		resolvers: resolvers,
	});
	server.listen().then(function (_ref2) {
		var url = _ref2.url;
		return console.log("Servidor Iniciado: " + url);
	});
}
var _default = startServer;
exports["default"] = _default;
