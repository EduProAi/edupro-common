import { getEncoding } from "js-tiktoken";
import { WordCounter } from "./word-counter";

type ChatCompletionMessageParam = {
  role: "user" | "assistant" | "system";
  content: string;
  name?: string;
};

export class UsageCounter {
  static countWords(text: string) {
    return WordCounter.countWords(text);
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
