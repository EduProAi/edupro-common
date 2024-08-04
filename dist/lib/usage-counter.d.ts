type ChatCompletionMessageParam = {
    role: "user" | "assistant" | "system";
    content: string;
    name?: string;
};
export declare class UsageCounter {
    static countWords(text: string): number;
    static countTokens(text: string): number;
    static countPromptMessagesTokens(messages: ChatCompletionMessageParam[]): number;
}
export {};
