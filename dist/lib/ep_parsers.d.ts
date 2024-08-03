import { Client, ClientAttributeType, MaritalStatus } from "@edupro/types";
type ParsedPlot = {
    plot: string;
    uuid: string;
    editable?: boolean;
};
export declare const parseGender: (gender?: number | undefined, defaultValue?: string) => string;
export declare const parseMaritalStatus: (status: MaritalStatus | undefined) => "未知" | "单身" | "已婚" | "离异" | "丧偶";
export declare const parseEducationLevel: (level: string | undefined) => "未知" | "小学" | "初中" | "高中" | "本科" | "研究生" | "博士";
export declare const parseEducationLevelColor: (level: string | undefined) => "未知" | "red" | "orange" | "yellow" | "green" | "blue" | "purple";
export declare const parseClientAttributeType: (type: string | ClientAttributeType | undefined, lang?: "zh" | "en") => "未知" | "学术成就" | "Academic Achievement" | "课外活动" | "Extracurricular Activity" | "个人兴趣和爱好" | "Personal Interest And Hobby" | "职业抱负" | "Career Aspiration" | "个人经验和挑战" | "Personal Experience And Challenge" | "技能和素质" | "Skill And Quality" | "个人成长和发展" | "Personal Growth And Development" | "Unknown";
export declare function parseAwardScope(scope: string): string;
export declare const parseEduLevelRank: (eduLevel: string | undefined) => 0 | 1 | 2 | 3 | 4 | 5;
export declare const parseClientContactInfoType: (type: string) => "未知" | "邮箱" | "电话" | "微信" | "QQ" | "Facebook" | "Twitter" | "Instagram" | "LinkedIn" | "GitHub" | "网站" | "微博" | "博客" | "其他";
export declare const clientNameParser: (client?: Partial<Client>) => string | undefined;
export declare class PlotParser {
    static parsePlots(plotString: string): ParsedPlot[];
    static joinPlots(plots: ParsedPlot[]): string;
}
export declare function parseOrderType(type?: string): string | undefined;
export declare function parseOrderStatus(status?: string): string | undefined;
export declare function parsePricingPlanCycle(cycle?: string): string | undefined;
export declare function parseFeatureHandle(featureHandle: string): string;
export declare function parseSmSchoolType(type?: string): string | undefined;
export declare function parseSmSchoolCampusSetting(setting?: string): string;
export declare function parseSmSchoolCountryCode(code?: string): string | undefined;
export declare function parseSmSchoolDegree(degree?: string): string | undefined;
export declare function sortSmSchoolDegrees(degreeIds: string[]): string[];
export {};
