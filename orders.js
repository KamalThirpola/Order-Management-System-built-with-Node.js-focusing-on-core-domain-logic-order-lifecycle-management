const data = require("./data");

const ORDER_STATES = [
  "CREATED",
  "ASSIGNED",
  "PICKED_UP",
  "IN_TRANSIT",
  "DELIVERED",
  "CANCELLED"
];

function createOrder(order) {
  const newOrder = {
    id: Date.now(),
    pickup: order.pickup,
    drop: order.drop,
    deliveryType: order.deliveryType,
    status: "CREATED",
    courierId: null
  };

  data.orders.push(newOrder);
  return newOrder;
}

function updateOrderStatus(orderId, newStatus) {
  const order = data.orders.find(o => o.id === orderId);

  if (!order) {
    throw new Error("Order not found");
  }

  const currentIndex = ORDER_STATES.indexOf(order.status);
  const nextIndex = ORDER_STATES.indexOf(newStatus);

  if (nextIndex !== currentIndex + 1 && newStatus !== "CANCELLED") {
    throw new Error("Invalid order state transition");
  }

  order.status = newStatus;
  return order;
}

module.exports = {
  createOrder,
  updateOrderStatus
};



