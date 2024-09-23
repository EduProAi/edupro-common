export type SearchDto = {
    query: string;
    take?: number;
    skip?: number;
    type?: "all" | "client" | "page";
};
