// orders.js

const { orders } = require("./data");

function createOrder(order) {
  orders.push({
    ...order,
    status: "CREATED",
  });
  return order;
}

function updateOrderStatus(orderId, newStatus) {
  const order = orders.find(o => o.id === orderId);

  if (!order) {
    throw new Error("Order not found");
  }

  order.status = newStatus;
  return order;
}

module.exports = {
  createOrder,
  updateOrderStatus,
};

