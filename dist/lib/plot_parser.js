"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlotParser = void 0;
var uuid_1 = require("uuid");
var PlotParser = /** @class */ (function () {
    function PlotParser() {
    }
    PlotParser.parsePlots = function (plotString) {
        return plotString
            .split(/\n+/)
            .filter(function (p) { return p.trim(); })
            .filter(function (p) { return p.trim(); })
            .map(function (p) { return p.replace(/^-\s+/, ""); })
            .map(function (p) { return ({ plot: p, uuid: (0, uuid_1.v4)() }); });
    };
    PlotParser.joinPlots = function (plots) {
        return plots
            .filter(function (p) { var _a; return (_a = p.plot) === null || _a === void 0 ? void 0 : _a.trim(); })
            .map(function (p) { return "- ".concat(p.plot); })
            .join("\n");
    };
    return PlotParser;
}());
exports.PlotParser = PlotParser;
