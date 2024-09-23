import { Client } from "./client.entity";
export type Page = {
    client_id: string | null;
    content_html: string | null;
    content_text: string | null;
    content_markdown: string | null;
    content_json: string | null;
    create_time: Date;
    update_time: Date;
    id: string;
    title: string | null;
    user_id: string;
    client?: Partial<Client>;
};
export interface SavePageHistoryParam {
    page_id: string;
}
export declare const isPageModel: (data: object) => data is Page;
