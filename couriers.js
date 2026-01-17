// Add a courier
function addCourier(name) {
  const courier = {
    id: data.couriers.length + 1,
    name,
    available: true
  };

  data.couriers.push(courier);
  return courier;
}

// Get all couriers
function getCouriers() {
  return data.couriers;
}

// Assign courier
function assignCourier() {
  const courier = data.couriers.find(c => c.available);
  if (!courier) return null;

  courier.available = false;
  return courier;
}

module.exports = {
  addCourier,
  getCouriers,


