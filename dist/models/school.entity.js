"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YearType = exports.CampusSetting = exports.SchoolType = exports.Requirement = exports.Degree = void 0;
// Added enums
var Degree;
(function (Degree) {
    Degree["LESS_THAN_ONE_YEAR"] = "LESS_THAN_ONE_YEAR";
    Degree["LESS_THAN_TWO_YEAR"] = "LESS_THAN_TWO_YEAR";
    Degree["TWO_YEARS_PLUS"] = "TWO_YEARS_PLUS";
    Degree["ASSOCIATE"] = "ASSOCIATE";
    Degree["BACHELOR"] = "BACHELOR";
    Degree["POST_BACHELOR"] = "POST_BACHELOR";
    Degree["MASTER"] = "MASTER";
    Degree["POST_MASTER"] = "POST_MASTER";
    Degree["DOCTOR"] = "DOCTOR";
    Degree["POST_DOCTOR"] = "POST_DOCTOR";
    Degree["PROFESSIONAL"] = "PROFESSIONAL";
    Degree["OTHER"] = "OTHER";
})(Degree || (exports.Degree = Degree = {}));
var Requirement;
(function (Requirement) {
    Requirement["REQUIRED"] = "REQUIRED";
    Requirement["CONSIDERED"] = "CONSIDERED";
    Requirement["NOT_REQUIRED"] = "NOT_REQUIRED";
    Requirement["UNSPECIFIED"] = "UNSPECIFIED";
})(Requirement || (exports.Requirement = Requirement = {}));
var SchoolType;
(function (SchoolType) {
    SchoolType["PUBLIC"] = "PUBLIC";
    SchoolType["PRIVATE"] = "PRIVATE";
    SchoolType["FOR_PROFIT"] = "FOR_PROFIT";
    SchoolType["OTHER"] = "OTHER";
})(SchoolType || (exports.SchoolType = SchoolType = {}));
var CampusSetting;
(function (CampusSetting) {
    CampusSetting["URBAN"] = "URBAN";
    CampusSetting["SUBURBAN"] = "SUBURBAN";
    CampusSetting["TOWN"] = "TOWN";
    CampusSetting["RURAL"] = "RURAL";
    CampusSetting["OTHER"] = "OTHER";
})(CampusSetting || (exports.CampusSetting = CampusSetting = {}));
var YearType;
(function (YearType) {
    YearType["TWO_YEAR"] = "TWO_YEAR";
    YearType["FOUR_YEAR"] = "FOUR_YEAR";
    YearType["POST_GRADUATE"] = "POST_GRADUATE";
    YearType["OTHER"] = "OTHER";
})(YearType || (exports.YearType = YearType = {}));
