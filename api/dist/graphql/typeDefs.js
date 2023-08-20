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
var typesArray = (0, _loadFiles.loadFilesSync)(
	_path["default"].join(__dirname, "modules", "**", "*.gql")
);
var typeDefs = (0, _merge.mergeTypeDefs)(typesArray);
var _default = typeDefs;
exports["default"] = _default;
