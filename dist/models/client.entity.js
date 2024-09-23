"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client_honor_award_scope = exports.ClientContactInfoType = exports.ClientAttributeType = exports.MaritalStatus = exports.Gender = void 0;
// Enums
var Gender;
(function (Gender) {
    Gender[Gender["unknown"] = 0] = "unknown";
    Gender[Gender["male"] = 1] = "male";
    Gender[Gender["female"] = 2] = "female";
})(Gender || (exports.Gender = Gender = {}));
var MaritalStatus;
(function (MaritalStatus) {
    MaritalStatus["single"] = "single";
    MaritalStatus["married"] = "married";
    MaritalStatus["divorced"] = "divorced";
    MaritalStatus["widowed"] = "widowed";
})(MaritalStatus || (exports.MaritalStatus = MaritalStatus = {}));
var ClientAttributeType;
(function (ClientAttributeType) {
    ClientAttributeType["AcademicAchievement"] = "AcademicAchievement";
    ClientAttributeType["ExtracurricularActivity"] = "ExtracurricularActivity";
    ClientAttributeType["PersonalInterestAndHobby"] = "PersonalInterestAndHobby";
    ClientAttributeType["CareerAspiration"] = "CareerAspiration";
    ClientAttributeType["PersonalExperienceAndChallenge"] = "PersonalExperienceAndChallenge";
    ClientAttributeType["SkillAndQuality"] = "SkillAndQuality";
    ClientAttributeType["PersonalGrowthAndDevelopment"] = "PersonalGrowthAndDevelopment";
})(ClientAttributeType || (exports.ClientAttributeType = ClientAttributeType = {}));
var ClientContactInfoType;
(function (ClientContactInfoType) {
    ClientContactInfoType["email"] = "email";
    ClientContactInfoType["phone"] = "phone";
    ClientContactInfoType["wechat"] = "wechat";
    ClientContactInfoType["qq"] = "qq";
    ClientContactInfoType["facebook"] = "facebook";
    ClientContactInfoType["twitter"] = "twitter";
    ClientContactInfoType["instagram"] = "instagram";
    ClientContactInfoType["linkedin"] = "linkedin";
    ClientContactInfoType["github"] = "github";
    ClientContactInfoType["website"] = "website";
    ClientContactInfoType["weibo"] = "weibo";
    ClientContactInfoType["blog"] = "blog";
    ClientContactInfoType["other"] = "other";
})(ClientContactInfoType || (exports.ClientContactInfoType = ClientContactInfoType = {}));
var client_honor_award_scope;
(function (client_honor_award_scope) {
    client_honor_award_scope["scholastic"] = "scholastic";
    client_honor_award_scope["municipal"] = "municipal";
    client_honor_award_scope["provincial"] = "provincial";
    client_honor_award_scope["national"] = "national";
    client_honor_award_scope["international"] = "international";
})(client_honor_award_scope || (exports.client_honor_award_scope = client_honor_award_scope = {}));
