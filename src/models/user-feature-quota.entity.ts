import { Feature } from "./feature.entity";

export type UserFeatureQuota = Partial<Feature> & {
  feature_handle: string;
  quota: number;
};
