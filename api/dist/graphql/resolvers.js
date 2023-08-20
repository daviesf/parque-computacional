"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true,
});
exports["default"] = void 0;
var _loadFiles = require("@graphql-tools/load-files");
var _merge = require("@graphql-tools/merge");
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}
var resolversArray = (0, _loadFiles.loadFilesSync)(
	_path["default"].join(__dirname, "modules", "**", "resolvers.js")
);
var resolvers = (0, _merge.mergeResolvers)(resolversArray);
var _default = resolvers;
exports["default"] = _default;
