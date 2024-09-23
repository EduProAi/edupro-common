export type AichatDto = {
  role: "user" | "assistant" | "system";
  message: string;
};

export type CheckPlagiarismDto = {
  text: string;
};

export type GeneratePlotsDto = {
  client_id: string;
  targetSchool: string;
  program: Degrees;
  major: string;
  customInput?: string;
  numPlots: number;
};

export type HumanizeDto = {
  text: string;
  proficiency?: "Intermediate" | "Advanced";
  temperature?: number;
  model: string;
};

export type WriteCvDto = {
  client_id: string;
  creative?: boolean;
};

export type OptimizePlotsDto = {
  client_id: string;
  plots: string;
  targetSchool: string;
  program: Degrees;
  major: string;
  customInput?: string;
};

export type WriteEssayDto = {
  client_id: string;
  plots: string;
  words?: number;
  targetSchool: string;
  program: Degrees;
  major: string;
  writingStyle?: string;
};

export type WriteRecommendationLetterDto = {
  client_id: string;
  word_count?: number;
  recommender_info: string;
  highlights?: string;
};

export type WritePromptedEssayDto = {
  client_id: string;
  prompts: string;
  highlights?: string;
  word_count?: number;
};

export type FreeWriteDto = {
  client_id: string;
  word_count?: number;
  style?: string;
  instructions?: string;
};

export type WritingTool =
  | "fix-spelling-grammar"
  | "lengthen"
  | "shorten"
  | "change-tone"
  | "rephrase"
  | "change-word-meaning"
  | "elaborate"
  | "translate"
  | "arrange-paragraphs"
  | "custom-prompt";

export type WritingToolsDto = {
  content: string;
  tool: WritingTool;
  extra?: { [key: string]: string };
};

export type Degrees =
  | "High School"
  | "Undergraduate"
  | "Graduate"
  | "MBA"
  | "PhD"
  | undefined;
