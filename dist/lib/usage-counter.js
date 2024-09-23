"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageCounter = void 0;
var js_tiktoken_1 = require("js-tiktoken");
var words_count_1 = require("words-count");
var UsageCounter = /** @class */ (function () {
    function UsageCounter() {
    }
    UsageCounter.countWords = function (text) {
        return (0, words_count_1.wordsCount)(text, {
            punctuationAsBreaker: false,
            punctuation: ["。", "！", "？", "，", "；", "：", "、", "。", "！", "？", "，", "；", "：", "、", ",", ".", "!", "?", ","],
            disableDefaultPunctuation: false,
        });
    };
    UsageCounter.countTokens = function (text) {
        var tokenEncoding = (0, js_tiktoken_1.getEncoding)("cl100k_base");
        return tokenEncoding.encode(text).length;
    };
    UsageCounter.countPromptMessagesTokens = function (messages) {
        var messagesString = messages.map(function (m) { return m.content; }).join(" ");
        return UsageCounter.countTokens(messagesString);
    };
    return UsageCounter;
}());
exports.UsageCounter = UsageCounter;
