"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageCounter = void 0;
var tiktoken_1 = require("tiktoken");
var UsageCounter = /** @class */ (function () {
    function UsageCounter() {
    }
    UsageCounter.countWords = function (text) {
        // const words = text.split(/\s+/)
        // return words.filter((word) => !!word).length
        var chineseWordRegex = /[\u4E00-\u9FFF]/g;
        var chineseWords = text.match(chineseWordRegex);
        var englishText = text.replace(chineseWordRegex, " ");
        var englishWords = englishText
            .split(/[\s.,;！，；．]+/)
            .filter(function (word) { return word.trim() !== ""; });
        var chineseWordCount = chineseWords ? chineseWords.length : 0;
        var englishWordCount = englishWords.length;
        // console.log(englishText)
        // console.log("CHinese:", chineseWords)
        // console.log("English:", englishWords)
        return chineseWordCount + englishWordCount;
    };
    UsageCounter.countTokens = function (text) {
        var tokenEncoding = (0, tiktoken_1.get_encoding)("cl100k_base");
        return tokenEncoding.encode(text).length;
    };
    UsageCounter.countPromptMessagesTokens = function (messages) {
        var messagesString = messages.map(function (m) { return m.content; }).join(" ");
        return UsageCounter.countTokens(messagesString);
    };
    return UsageCounter;
}());
exports.UsageCounter = UsageCounter;
