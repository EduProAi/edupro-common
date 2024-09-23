"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_type = exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "PENDING";
    OrderStatus["PAID"] = "PAID";
    OrderStatus["PROCESSING"] = "PROCESSING";
    OrderStatus["SHIPPED"] = "SHIPPED";
    OrderStatus["COMPLETED"] = "COMPLETED";
    OrderStatus["CANCELLED"] = "CANCELLED";
    OrderStatus["REFUNDED"] = "REFUNDED";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
var order_type;
(function (order_type) {
    order_type["subscription"] = "subscription";
    order_type["cash_topup"] = "cash_topup";
    order_type["data_package"] = "data_package";
})(order_type || (exports.order_type = order_type = {}));
