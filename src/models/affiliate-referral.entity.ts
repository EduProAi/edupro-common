import { User } from "./user.entity";

export type AffiliateReferral = {
  id: string;
  affiliate_id: string;
  referral_id: string;
  commission_rate: number;
  affiliate?: User;
  referral?: User;
};
