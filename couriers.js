const data = require("./data");

function addCourier(name) {
  const courier = {
    id: Date.now(),
    name,
    available: true
  };

  data.couriers.push(courier);
  return courier;
}

function assignCourier(orderId, courierId) {
  const order = data.orders.find(o => o.id === orderId);
  const courier = data.couriers.find(c => c.id === courierId);

  if (!order || !courier) {
    throw new Error("Order or Courier not found");
  }

  if (!courier.available) {
    throw new Error("Courier already assigned");
  }

  order.courierId = courierId;
  order.status = "ASSIGNED";
  courier.available = false;

  return order;
}

module.exports = {
  addCourier,
  assignCourier
};



