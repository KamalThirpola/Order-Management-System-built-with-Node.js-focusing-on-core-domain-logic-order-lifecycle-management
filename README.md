# Order Management System

An Order Management System developed using **Node.js** (NestJS preferred / Express acceptable) that manages order creation, lifecycle transitions, and business rules with a strong focus on core domain logic.

The system uses in-memory or file-based persistence and avoids external services to keep the design simple and logic-driven.

---

## 🔧 Technical Constraints

- **Language / Framework:** Node.js (NestJS preferred, Express acceptable)
- **Database:** In-memory or file-based persistence
- **External Services:** No external APIs, queues, or managed services
- **Focus:** Core domain logic and business rules (deployment out of scope)

- ---

## ✨ Features

- Create and manage orders
- Strict order lifecycle management
- Validation of order state transitions
- In-memory or file-based data storage
- Clean separation of business rules and logic

- ---

## 📁 Project Structure
Order-Management-System/
├── index.js
├── orders.js
├── couriers.js
├── status.js
├── README.md
├── LICENSE
└── .gitignore

## ▶️ How to Run

1. **Install Node.js** (v16+ recommended)  
2. Clone the repository:
   ```bash
   git clone https:https://github.com/KamalThirpola/Order-Management-System-built-with-Node.js-focusing-on-core-domain-logic-order-lifecycle-management
3. Install dependecies
   '''bash
   npm install
4. Start the application
   '''bash
   npm start
5. Open your browser or Postman to test the API endpoints (default port: 3000)
   Sample API Endpoints
   Method Endpoint   Description
   POST  /orders     Create a new order
   GET   /orders     Get list of all orders
   GET   /orders/:id Get details of a specific order
   PUT   /orders/:id/status Update order status
   GET   /couriers Get list of available couriers
   POST  /couriers/assign/:id  Assign courier to an order
   All endpoints use JSON format for requests and responses.
Topics
nodejs
nestjs
express
order-management
backend
system-design
domain-logic
in-memory-database
rest-api
logistics
Line
Order Management System | Node.js, NestJS/Express
- Developed a domain-driven order management system with strict order lifecycle validation.
- Implemented in-memory persistence and courier assignment logic.
- GitHub: https:https://github.com/KamalThirpola/Order-Management-System-built-with-Node.js-focusing-on-core-domain-logic-order-lifecycle-management

“I built an Order Management System in Node.js focusing on domain logic, order lifecycle management, and in-memory persistence. The project is on my GitHub.”
 
