 order.status = "ASSIGNED";

  return order;
}

// Update order status
function updateStatus(orderId, newStatus) {
  const order = data.orders.find(o => o.id === orderId);
  if (!order) throw new Error("Order not found");

  const currentIndex = ORDER_STATES.indexOf(order.status);
  const nextIndex = ORDER_STATES.indexOf(newStatus);

  if (nextIndex === -1 || nextIndex !== currentIndex + 1)
    throw new Error("Invalid state transition");

  order.status = newStatus;
  return order;
}

// Get all orders
function getOrders() {
  return data.orders;
}

module.exports = {
  createOrder,
  assignOrder,
  updateStatus,
  getOrders
};


