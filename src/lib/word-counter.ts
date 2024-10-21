import { wordsCount } from "words-count";

/**
 * This is an extracted stand-alone word counter from the usage counter,
 * created to reduce dependency size for the frontend.
 * It provides a simple interface to count words in a given text,
 * using the 'words-count' library with specific configuration for
 * punctuation handling across multiple languages.
 */

export class WordCounter {
  static countWords(text: string) {
    return wordsCount(text, {
      punctuationAsBreaker: false,
      punctuation: [
        "。",
        "！",
        "？",
        "，",
        "；",
        "：",
        "、",
        "。",
        "！",
        "？",
        "，",
        "；",
        "：",
        "、",
        ",",
        ".",
        "!",
        "?",
        ",",
      ],
      disableDefaultPunctuation: false,
    });
  }
}
