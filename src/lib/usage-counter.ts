import { getEncoding } from "tiktoken-node";

type ChatCompletionMessageParam = {
  role: "user" | "assistant" | "system";
  content: string;
  name?: string;
};

export class UsageCounter {
  static countWords(text: string) {
    // const words = text.split(/\s+/)
    // return words.filter((word) => !!word).length

    const chineseWordRegex = /[\u4E00-\u9FFF]/g;
    const chineseWords = text.match(chineseWordRegex);
    const englishText = text.replace(chineseWordRegex, " ");
    const englishWords = englishText
      .split(/[\s.,;！，；．]+/)
      .filter((word) => word.trim() !== "");

    const chineseWordCount = chineseWords ? chineseWords.length : 0;
    const englishWordCount = englishWords.length;

    // console.log(englishText)
    // console.log("CHinese:", chineseWords)
    // console.log("English:", englishWords)

    return chineseWordCount + englishWordCount;
  }

  static countTokens(text: string) {
    const tokenEncoding = getEncoding("cl100k_base");
    return tokenEncoding.encode(text).length;
  }

  static countPromptMessagesTokens(messages: ChatCompletionMessageParam[]) {
    const messagesString = messages.map((m) => m.content).join(" ");
    return UsageCounter.countTokens(messagesString);
  }
}
