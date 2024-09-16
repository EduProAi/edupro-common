import { getEncoding } from "js-tiktoken";
import { wordsCount } from "words-count";

type ChatCompletionMessageParam = {
  role: "user" | "assistant" | "system";
  content: string;
  name?: string;
};

export class UsageCounter {
  static countWords(text: string) {
    return wordsCount(text, {
      punctuationAsBreaker: true,
      punctuation: ["。", "！", "？"],
      disableDefaultPunctuation: false,
    });
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
