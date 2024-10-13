import { User } from "./user.entity";
export type UserUsage = {
    id: string;
    user_id: string;
    feature_handle: string;
    create_time: Date;
    usage: number;
    title?: string;
    extra_info?: string;
    token_usage?: number;
    model?: string;
    is_input?: boolean;
    output?: string;
    prompt?: string;
    input?: string;
    user?: User;
};
