const http = require("http");
const url = require("url");

const { createOrder, updateOrderStatus, getOrders } = require("./orders");
const { getCouriers } = require("./couriers");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname } = parsedUrl;

  res.setHeader("Content-Type", "application/json");

  // Health check
  if (req.method === "GET" && pathname === "/") {
    res.end(JSON.stringify({ message: "Order Management System Running" }));
  }

  // Get all orders
  else if (req.method === "GET" && pathname === "/orders") {
    res.end(JSON.stringify(getOrders()));
  }

  // Create order
  else if (req.method === "POST" && pathname === "/orders") {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const orderData = JSON.parse(body);
      const order = createOrder(orderData);
      res.end(JSON.stringify(order));
    });
  }

  // Update order status
  else if (req.method === "PUT" && pathname.startsWith("/orders/")) {
    const orderId = pathname.split("/")[2];
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const { status } = JSON.parse(body);
      const updatedOrder = updateOrderStatus(orderId, status);
      res.end(JSON.stringify(updatedOrder));
    });
  }

  // Get couriers
  else if (req.method === "GET" && pathname === "/couriers") {
    res.end(JSON.stringify(getCouriers()));
  }

  // Not found
  else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


