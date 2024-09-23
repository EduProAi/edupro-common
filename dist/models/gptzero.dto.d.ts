interface CategorizedScores {
    Burstiness: "high" | "medium" | "low";
    Perplexity: "high" | "medium" | "low";
    Simplicity: "high" | "medium" | "low";
    "Percent SAT": "high" | "medium" | "low";
    Readability: "high" | "medium" | "low";
    "Average Sentence Length": "high" | "medium" | "low";
}
interface RawScores {
    Burstiness: number;
    Perplexity: number;
    Simplicity: number;
    "Percent SAT": number;
    Readability: number;
    "Average Sentence Length": number;
}
interface NormScores {
    Burstiness: number;
    Perplexity: number;
    Simplicity: number;
    "Percent SAT": number;
    Readability: number;
    "Average Sentence Length": number;
}
interface WritingStats {
    raw_scores: RawScores;
    norm_scores: NormScores;
    categorized_scores: CategorizedScores;
}
interface ConfidenceScoresRaw {
    softmax: {
        ai: number;
        human: number;
        mixed: number;
    };
}
interface ConfidenceThresholdsRaw {
    softmax: {
        ai: {
            low: number;
            medium: number;
            reject: number;
        };
        human: {
            low: number;
            medium: number;
            reject: number;
        };
        mixed: {
            low: number;
            medium: number;
            reject: number;
        };
    };
}
interface ClassProbabilities {
    ai: number;
    human: number;
    mixed: number;
}
interface Paragraph {
    num_sentences: number;
    start_sentence_index: number;
    completely_generated_prob: number;
}
interface Sentence {
    sentence: string;
    perplexity: number;
    generated_prob: number;
    highlight_sentence_for_ai?: boolean;
}
interface Document {
    version: string;
    sentences: Sentence[];
    paragraphs: Paragraph[];
    document_id: string;
    writing_stats: WritingStats;
    result_message: string;
    predicted_class: "human" | "ai" | "mixed";
    confidence_score: number;
    overall_burstiness: number;
    result_sub_message: string;
    class_probabilities: ClassProbabilities;
    confidence_category: "high" | "medium" | "low";
    confidence_scores_raw: ConfidenceScoresRaw;
    average_generated_prob: number;
    document_classification: "HUMAN_ONLY" | "AI_ONLY" | "MIXED";
    completely_generated_prob: number;
    confidence_thresholds_raw: ConfidenceThresholdsRaw;
}
export interface GptZeroScanResult {
    scanId: string;
    version: string;
    documents: Document[];
}
export {};
