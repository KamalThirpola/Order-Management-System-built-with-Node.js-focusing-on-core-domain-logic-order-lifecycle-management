const http = require("http");
const { createOrder, updateOrderStatus } = require("./orders");
const { addCourier, assignCourier } = require("./couriers");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  let body = "";
  req.on("data", chunk => body += chunk);

  req.on("end", () => {
    try {
      const data = body ? JSON.parse(body) : {};

      // Create Order
      if (req.method === "POST" && req.url === "/orders") {
        const order = createOrder(data);
        res.end(JSON.stringify(order));
      }

      // Update Order Status
      else if (req.method === "PATCH" && req.url === "/orders/status") {
        const order = updateOrderStatus(data.orderId, data.status);
        res.end(JSON.stringify(order));
      }

      // Add Courier
      else if (req.method === "POST" && req.url === "/couriers") {
        const courier = addCourier(data.name);
        res.end(JSON.stringify(courier));
      }

      // Assign Courier
      else if (req.method === "POST" && req.url === "/assign") {
        const order = assignCourier(data.orderId, data.courierId);
        res.end(JSON.stringify(order));
      }

      else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: "Route not found" }));
      }
    } catch (err) {
      res.statusCode = 400;
      res.end(JSON.stringify({ error: err.message }));
    }
  });
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
