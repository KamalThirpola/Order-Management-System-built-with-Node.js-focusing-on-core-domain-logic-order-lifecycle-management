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

Order-Management-System/ ├─ src/                     # Source code (Node.js files) │  ├─ controllers/          # Request handlers │  ├─ services/             # Business logic / domain rules │  ├─ models/               # Order, Courier models │  ├─ utils/                # Helper functions │  └─ index.js              # Entry point ├─ database/                # In-memory or file-based data storage ├─ README.md                # Project documentation ├─ .gitignore               # Files to ignore in Git └─ package.json             # Project dependencies

---

## ▶️ How to Run

1. **Install Node.js** (v16+ recommended)  
2. Clone the repository:
   ```bash
   git clone https://github.com/KamalThirpola/order-management-system.git
   cd order-management-system
   npm install
   npm start
