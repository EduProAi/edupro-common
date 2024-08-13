"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortSmSchoolDegrees = exports.parseSmSchoolDegree = exports.parseSmSchoolCountryCode = exports.parseSmSchoolCampusSetting = exports.parseSmSchoolType = exports.parseFeatureHandle = exports.parsePricingPlanCycle = exports.parseOrderStatus = exports.parseOrderType = exports.PlotParser = exports.clientNameParser = exports.parseClientContactInfoType = exports.parseEduLevelRank = exports.parseAwardScope = exports.parseClientAttributeType = exports.parseEducationLevelColor = exports.parseEducationLevel = exports.parseMaritalStatus = exports.parseGender = void 0;
var types_1 = require("@edupro/types");
var uuid_1 = require("uuid");
var parseGender = function (gender, defaultValue) {
    if (gender === void 0) { gender = undefined; }
    switch (gender) {
        case 1:
            return "男";
        case 2:
            return "女";
        default:
            return defaultValue || "未知";
    }
};
exports.parseGender = parseGender;
var parseMaritalStatus = function (status) {
    switch (status) {
        case types_1.MaritalStatus.single:
            return "单身";
        case types_1.MaritalStatus.married:
            return "已婚";
        case types_1.MaritalStatus.divorced:
            return "离异";
        case types_1.MaritalStatus.widowed:
            return "丧偶";
        default:
            return "未知";
    }
};
exports.parseMaritalStatus = parseMaritalStatus;
var parseEducationLevel = function (level) {
    switch (level === null || level === void 0 ? void 0 : level.toLowerCase()) {
        case "elementary":
            return "小学";
        case "middleschool":
            return "初中";
        case "highschool":
            return "高中";
        case "undergraduate":
            return "本科";
        case "graduate":
            return "研究生";
        case "phd":
            return "博士";
        default:
            return "未知";
    }
};
exports.parseEducationLevel = parseEducationLevel;
var parseEducationLevelColor = function (level) {
    switch (level === null || level === void 0 ? void 0 : level.toLowerCase()) {
        case "elementary":
            return "red";
        case "middleschool":
            return "orange";
        case "highschool":
            return "yellow";
        case "undergraduate":
            return "green";
        case "graduate":
            return "blue";
        case "phd":
            return "purple";
        default:
            return "未知";
    }
};
exports.parseEducationLevelColor = parseEducationLevelColor;
var parseClientAttributeType = function (type, lang) {
    if (lang === void 0) { lang = "zh"; }
    var isZh = lang === "zh";
    switch (type) {
        case types_1.ClientAttributeType.AcademicAchievement:
            return isZh ? "学术成就" : "Academic Achievement";
        case types_1.ClientAttributeType.ExtracurricularActivity:
            return isZh ? "课外活动" : "Extracurricular Activity";
        case types_1.ClientAttributeType.PersonalInterestAndHobby:
            return isZh ? "个人兴趣和爱好" : "Personal Interest And Hobby";
        case types_1.ClientAttributeType.CareerAspiration:
            return isZh ? "职业抱负" : "Career Aspiration";
        case types_1.ClientAttributeType.PersonalExperienceAndChallenge:
            return isZh ? "个人经验和挑战" : "Personal Experience And Challenge";
        case types_1.ClientAttributeType.SkillAndQuality:
            return isZh ? "技能和素质" : "Skill And Quality";
        case types_1.ClientAttributeType.PersonalGrowthAndDevelopment:
            return isZh ? "个人成长和发展" : "Personal Growth And Development";
        default:
            return isZh ? "未知" : "Unknown";
    }
};
exports.parseClientAttributeType = parseClientAttributeType;
function parseAwardScope(scope) {
    var scopeMap = {
        scholastic: "校级",
        municipal: "市级",
        provincial: "省级",
        national: "国家级",
        international: "国际级",
    };
    return scopeMap[scope] || scope;
}
exports.parseAwardScope = parseAwardScope;
var parseEduLevelRank = function (eduLevel) {
    switch (eduLevel) {
        case "middleschool":
            return 1;
        case "highschool":
            return 2;
        case "undergraduate":
            return 3;
        case "graduate":
            return 4;
        case "phd":
            return 5;
        default:
            return 0;
    }
};
exports.parseEduLevelRank = parseEduLevelRank;
var parseClientContactInfoType = function (type) {
    switch (type) {
        case "email":
            return "邮箱";
        case "phone":
            return "电话";
        case "wechat":
            return "微信";
        case "qq":
            return "QQ";
        case "facebook":
            return "Facebook";
        case "twitter":
            return "Twitter";
        case "instagram":
            return "Instagram";
        case "linkedin":
            return "LinkedIn";
        case "github":
            return "GitHub";
        case "website":
            return "网站";
        case "weibo":
            return "微博";
        case "blog":
            return "博客";
        case "other":
            return "其他";
        default:
            return "未知";
    }
};
exports.parseClientContactInfoType = parseClientContactInfoType;
var clientNameParser = function (client) {
    var _a, _b, _c, _d, _e;
    var idCardName = (_b = (_a = client === null || client === void 0 ? void 0 : client.client_id_card) === null || _a === void 0 ? void 0 : _a.find(function (idCard) { var _a; return (_a = idCard.full_name) === null || _a === void 0 ? void 0 : _a.trim(); })) === null || _b === void 0 ? void 0 : _b.full_name;
    var passportName = (_d = (_c = client === null || client === void 0 ? void 0 : client.client_passport) === null || _c === void 0 ? void 0 : _c.find(function (passport) { var _a; return (_a = passport.full_name) === null || _a === void 0 ? void 0 : _a.trim(); })) === null || _d === void 0 ? void 0 : _d.full_name;
    var personalInfoFullName = (_e = client === null || client === void 0 ? void 0 : client.client_personal_info) === null || _e === void 0 ? void 0 : _e.full_name;
    var name = personalInfoFullName || idCardName || passportName || (client === null || client === void 0 ? void 0 : client.nickname);
    return name;
};
exports.clientNameParser = clientNameParser;
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
function parseOrderType(type) {
    switch (type) {
        case "cash_topup":
            return "充值";
        case "subscription":
            return "订阅套餐";
        case "data_package":
            return "数据流量包";
        default:
            return type;
    }
}
exports.parseOrderType = parseOrderType;
function parseOrderStatus(status) {
    switch (status) {
        case "PENDING":
            return "待支付";
        case "PAID":
            return "已支付";
        case "PROCESSING":
            return "正在处理";
        case "SHIPPED":
            return "已发货";
        case "COMPLETED":
            return "已完成";
        case "CANCELLED":
            return "已取消";
        case "REFUNDED":
            return "已退款";
        default:
            return status;
    }
}
exports.parseOrderStatus = parseOrderStatus;
function parsePricingPlanCycle(cycle) {
    switch (cycle === null || cycle === void 0 ? void 0 : cycle.toLowerCase()) {
        case "monthly":
            return "月付";
        case "annually":
            return "年付";
        default:
            return cycle;
    }
}
exports.parsePricingPlanCycle = parsePricingPlanCycle;
function parseFeatureHandle(featureHandle) {
    var featureHandleMap = new Map([
        ["word-quota", "单词生成"],
        ["doc-ocr", "智能建档"],
        ["max-subaccount", "子账号"],
    ]);
    return featureHandleMap.get(featureHandle) || featureHandle;
}
exports.parseFeatureHandle = parseFeatureHandle;
function parseSmSchoolType(type) {
    var typeMap = new Map([
        ["public", "公立"],
        ["private", "私立"],
    ]);
    return type ? typeMap.get(type.toLowerCase()) : type;
}
exports.parseSmSchoolType = parseSmSchoolType;
function parseSmSchoolCampusSetting(setting) {
    if (!setting)
        return "";
    // city, town, suburb, large, midsize, small, Rural, Distant
    var typeMap = new Map([
        ["city", "城市"],
        ["town", "小镇"],
        ["suburb", "郊区"],
        ["large", "大型"],
        ["midsize", "中型"],
        ["small", "小型"],
        ["rural", "农村"],
        ["distant", "偏远"],
    ]);
    return setting
        .split(":")
        .filter(function (s) { return s === null || s === void 0 ? void 0 : s.trim(); })
        .map(function (s) { return typeMap.get(s.trim().toLowerCase()) || s; })
        .join(":");
}
exports.parseSmSchoolCampusSetting = parseSmSchoolCampusSetting;
function parseSmSchoolCountryCode(code) {
    var codeMap = new Map([
        ["us", "美国"],
        ["uk", "英国"],
        ["au", "澳大利亚"],
        ["hk", "香港"],
        ["sg", "新加坡"],
        ["jp", "日本"],
        ["kr", "韩国"],
    ]);
    return code ? codeMap.get(code.toLowerCase()) : code;
}
exports.parseSmSchoolCountryCode = parseSmSchoolCountryCode;
function parseSmSchoolDegree(degree) {
    var degreeMap = new Map([
        ["BACHELOR", "学士学位"],
        ["POST_BACHELOR", "学士后证书"],
        ["MASTER", "硕士学位"],
        ["POST_MASTER", "硕士后证书"],
        ["DOCTOR", "博士学位"],
        ["POST_DOCTORAL", "博士后研究"],
        ["ASSOCIATE", "副学士学位"],
        ["LESS_THAN_ONE_YEAR", "证书(一年以下)"],
        ["LESS_THAN_TWO_YEAR", "证书(一到两年)"],
        ["2_YEARS_PLUS", "证书(两年以上)"],
    ]);
    return degree ? degreeMap.get(degree.toUpperCase()) : degree;
}
exports.parseSmSchoolDegree = parseSmSchoolDegree;
var degreeOrder = [
    "BACHELOR",
    "MASTER",
    "DOCTOR",
    "POST_MASTER",
    "POST_BACHELOR",
    "POST_DOCTORAL",
    "ASSOCIATE",
    "LESS_THAN_ONE_YEAR",
    "LESS_THAN_TWO_YEAR",
    "2_YEARS_PLUS",
];
function sortSmSchoolDegrees(degreeIds) {
    return degreeIds.sort(function (a, b) { return degreeOrder.indexOf(a) - degreeOrder.indexOf(b); });
}
exports.sortSmSchoolDegrees = sortSmSchoolDegrees;
