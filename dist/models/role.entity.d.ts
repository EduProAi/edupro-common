import { User } from "./user.entity";
export type Role = {
    id: string;
    name: string;
    description: string;
    admin_level: number;
};
export type UserRole = {
    id: string;
    user_id: string;
    role_id: string;
    role: Role;
    update_time: Date;
    user?: User;
};
