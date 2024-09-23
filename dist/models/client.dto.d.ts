import { Client, ClientContactInfoType, ClientPersonalInfo, MaritalStatus } from "./client.entity";
export type ClientStatus = "active" | "archived" | "deleted";
export type CreateClientDto = {
    nickname: string;
    client_personal_info?: Partial<ClientPersonalInfo>;
};
export type UpdateClientDto = Partial<CreateClientDto> & {
    id: string;
    status?: ClientStatus;
};
export type GetClientDto = {
    id?: string;
    page?: number;
    page_size?: number;
    kw?: string;
};
export type FindClientsDto = {
    take?: number;
    skip?: number;
    orderBy?: {
        id?: "asc" | "desc";
        nickname?: "asc" | "desc";
        create_time?: "asc" | "desc";
    };
    search?: string;
    status?: ClientStatus;
};
export type GetClientResponse = {
    clients: Client[];
    total: number;
};
export type CreateClientContactInfoDto = {
    client_id: string;
    handle: string;
    type: ClientContactInfoType;
};
export type UpdateClientContactInfoDto = Partial<CreateClientContactInfoDto>;
export type CreateClientPersonalInfoDto = {
    marital_status?: MaritalStatus;
    city_of_birth?: string;
    gender?: number;
};
export type CreateClientAttributeDto = {
    client_id: string;
    type: string;
    content: string;
};
export type UpdateClientAttributeDto = CreateClientAttributeDto & {
    id: string;
};
export type CreateClientAddressDto = {
    client_id: string;
    country: string;
    province: string;
    city: string;
    street_address: string;
};
export type UpdateClientPersonalInfoDto = {
    full_name?: string;
    city_of_birth?: string | null;
    gender?: number | null;
};
