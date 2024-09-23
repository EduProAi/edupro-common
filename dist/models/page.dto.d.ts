export type CreatePageDto = {
    client_id?: string;
    title: string | null;
    content_html: string | null;
    content_text: string | null;
    content_markdown: string | null;
    content_json: string | null;
};
export type UpdatePageDto = CreatePageDto & {
    id: string;
};
