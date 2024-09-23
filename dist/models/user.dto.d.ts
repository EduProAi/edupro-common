export type CountryCodeData = {
    country: string;
    country_cn: string;
    code: string;
    iso: string;
    priority: number;
};
export type LoginUserDto = {
    username: string;
    password: string;
};
export type ChangePasswordDto = {
    currentPassword?: string;
    newPassword: string;
};
export type CreateUserDto = {
    username: string;
    password: string;
    email: string;
    nickname?: string;
    mobile_country_code?: string;
    mobile_number?: string;
};
export type FindUserDto = {
    search?: string;
    take?: number;
    skip?: number;
    sort?: "asc" | "desc";
};
