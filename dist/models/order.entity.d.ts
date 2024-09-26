import { User } from "./user.entity";
import { DataPackage } from "./data-package.entity";
export declare enum OrderStatus {
    PENDING = "PENDING",
    PAID = "PAID",
    PROCESSING = "PROCESSING",
    SHIPPED = "SHIPPED",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED",
    REFUNDED = "REFUNDED"
}
export declare enum order_type {
    subscription = "subscription",
    cash_topup = "cash_topup",
    data_package = "data_package"
}
export type Order = {
    out_trade_no: string;
    user_id: string;
    pricing_plan_id?: string;
    create_time: Date;
    status: OrderStatus;
    order_type: order_type;
    amount: number;
    user?: User;
    order_payment?: OrderPayment;
    data_package?: DataPackage;
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
