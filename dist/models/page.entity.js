"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPageModel = void 0;
var isPageModel = function (data) {
    var keys = Object.keys(data);
    var test = !!data &&
        keys.includes("uid") &&
        keys.includes("title") &&
        keys.includes("content");
    return test;
};
exports.isPageModel = isPageModel;
