export type CreateAffiliateDto = {
    user_id: string;
};
export type CreateAffiliateReferralDto = {
    affiliate_id: string;
    referral_id: string;
    commission_rate: number;
};
export type FindAffiliateDto = {
    page?: number;
    pageSize?: number;
    search?: string;
    order?: "asc" | "desc";
};
export type UpdateAffiliateReferralDto = Partial<CreateAffiliateReferralDto>;
