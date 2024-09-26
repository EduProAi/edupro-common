import { User } from "./user.entity";
import { DataPackage } from "./data-package.entity";

export enum OrderStatus {
  PENDING = "PENDING",
  PAID = "PAID",
  PROCESSING = "PROCESSING",
  SHIPPED = "SHIPPED",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
  REFUNDED = "REFUNDED",
}

export enum order_type {
  subscription = "subscription",
  cash_topup = "cash_topup",
  data_package = "data_package",
}

export type Order = {
  out_trade_no: string;
  user_id: string;
  pricing_plan_id?: string;
  create_time: Date;
  status: OrderStatus;
  order_type: order_type;
  amount: number;

  // relations
  user?: User;
  order_payment?: OrderPayment;

  // extra manual relations
  data_package?: DataPackage; // this is not a mysql relation, but manually handled in api, it uses the merchandise id to fetch the data package
};

export type OrderPayment = {
  id: string;
  trade_no?: string;
  out_trade_no?: string;
  payment_method?: string;
  total_amount: number;
  payment_time: Date;
};

export type PaymentMethod = "CASH_BALANCE" | "ALIPAY" | "STRIPE";
