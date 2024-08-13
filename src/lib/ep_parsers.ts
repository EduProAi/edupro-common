import { Client, ClientAttributeType, MaritalStatus } from "@edupro/types";
import { v4 as uuidv4 } from "uuid";
import yaml from "js-yaml";

type ParsedPlot = {
  plot: string;
  uuid: string;
  editable?: boolean;
};

export const parseGender = (
  gender: number | undefined = undefined,
  defaultValue?: string
) => {
  switch (gender) {
    case 1:
      return "男";
    case 2:
      return "女";
    default:
      return defaultValue || "未知";
  }
};

export const parseMaritalStatus = (status: MaritalStatus | undefined) => {
  switch (status) {
    case MaritalStatus.single:
      return "单身";
    case MaritalStatus.married:
      return "已婚";
    case MaritalStatus.divorced:
      return "离异";
    case MaritalStatus.widowed:
      return "丧偶";
    default:
      return "未知";
  }
};

export const parseEducationLevel = (level: string | undefined) => {
  switch (level?.toLowerCase()) {
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

export const parseEducationLevelColor = (level: string | undefined) => {
  switch (level?.toLowerCase()) {
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

export const parseClientAttributeType = (
  type: string | ClientAttributeType | undefined,
  lang: "zh" | "en" = "zh"
) => {
  const isZh = lang === "zh";
  switch (type) {
    case ClientAttributeType.AcademicAchievement:
      return isZh ? "学术成就" : "Academic Achievement";
    case ClientAttributeType.ExtracurricularActivity:
      return isZh ? "课外活动" : "Extracurricular Activity";
    case ClientAttributeType.PersonalInterestAndHobby:
      return isZh ? "个人兴趣和爱好" : "Personal Interest And Hobby";
    case ClientAttributeType.CareerAspiration:
      return isZh ? "职业抱负" : "Career Aspiration";
    case ClientAttributeType.PersonalExperienceAndChallenge:
      return isZh ? "个人经验和挑战" : "Personal Experience And Challenge";
    case ClientAttributeType.SkillAndQuality:
      return isZh ? "技能和素质" : "Skill And Quality";
    case ClientAttributeType.PersonalGrowthAndDevelopment:
      return isZh ? "个人成长和发展" : "Personal Growth And Development";
    default:
      return isZh ? "未知" : "Unknown";
  }
};

export function parseAwardScope(scope: string): string {
  const scopeMap: Record<string, string> = {
    scholastic: "校级",
    municipal: "市级",
    provincial: "省级",
    national: "国家级",
    international: "国际级",
  };

  return scopeMap[scope] || scope;
}

export const parseEduLevelRank = (eduLevel: string | undefined) => {
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

export const parseClientContactInfoType = (type: string) => {
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

export const clientNameParser = (client?: Partial<Client>) => {
  const idCardName = client?.client_id_card?.find((idCard) =>
    idCard.full_name?.trim()
  )?.full_name;
  const passportName = client?.client_passport?.find((passport) =>
    passport.full_name?.trim()
  )?.full_name;
  const personalInfoFullName = client?.client_personal_info?.full_name;

  const name =
    personalInfoFullName || idCardName || passportName || client?.nickname;
  return name;
};

export class PlotParser {
  static parsePlots(plotString: string): ParsedPlot[] {
    return plotString
      .split(/\n+/)
      .filter((p) => p.trim())
      .filter((p) => p.trim())
      .map((p) => p.replace(/^-\s+/, ""))
      .map((p) => ({ plot: p, uuid: uuidv4() }));
  }

  static joinPlots(plots: ParsedPlot[]) {
    return plots
      .filter((p) => p.plot?.trim())
      .map((p) => `- ${p.plot}`)
      .join("\n");
  }
}

export function parseOrderType(type?: string) {
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

export function parseOrderStatus(status?: string) {
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

export function parsePricingPlanCycle(cycle?: string) {
  switch (cycle?.toLowerCase()) {
    case "monthly":
      return "月付";
    case "annually":
      return "年付";
    default:
      return cycle;
  }
}

export function parseFeatureHandle(featureHandle: string) {
  const featureHandleMap = new Map<string, string>([
    ["word-quota", "单词生成"],
    ["doc-ocr", "智能建档"],
    ["max-subaccount", "子账号"],
  ]);
  return featureHandleMap.get(featureHandle) || featureHandle;
}

export function parseSmSchoolType(type?: string) {
  const typeMap = new Map<string, string>([
    ["public", "公立"],
    ["private", "私立"],
  ]);
  return type ? typeMap.get(type.toLowerCase()) : type;
}

export function parseSmSchoolCampusSetting(setting?: string) {
  if (!setting) return "";
  // city, town, suburb, large, midsize, small, Rural, Distant
  const typeMap = new Map<string, string>([
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
    .filter((s) => s?.trim())
    .map((s) => typeMap.get(s.trim().toLowerCase()) || s)
    .join(":");
}

export function parseSmSchoolCountryCode(code?: string) {
  const codeMap = new Map<string, string>([
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

export function parseSmSchoolDegree(degree?: string) {
  const degreeMap = new Map<string, string>([
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

const degreeOrder = [
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

export function sortSmSchoolDegrees(degreeIds: string[]): string[] {
  return degreeIds.sort(
    (a, b) => degreeOrder.indexOf(a) - degreeOrder.indexOf(b)
  );
}
