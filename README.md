# 🏀 Court-IQ Backend Server

This is the **Express.js backend service** for the **Court-IQ** platform — a basketball analytics and sports betting application. It hosts player images, includes infrastructure for user account management (while authentication is currently handled via Firebase on the frontend), and stores a fully structured archive of **50+ years of NBA data**, ready for frontend integration.

Additionally, it serves as middleware, forwarding search queries to a Flask-based microservice: [court-iq-search](https://github.com/jorammercado/court-iq-search). This powers the prototype natural language search bar.

## 📁 Contents

- [🌐 Deployed Server](#-deployed-server)
- [🔗 Related Repos](#-related-repos)
- [🚀 Deployment](#-deployment)
- [🧰 Tech Stack](#-tech-stack)
- [🛠 Installation](#-installation)
- [📄 License](#-license)
- [📬 Contact](#-contact)

## 🌐 Deployed Server

- 🔗 [Live API Server](https://courtiq.onrender.com)

## 🔗 Related Repos

- 🎯 Frontend: [court-iq](https://github.com/jorammercado/court-iq)
- 🧠 Search Microservice: [court-iq-search](https://github.com/jorammercado/court-iq-search)

## 🚀 Deployment

- Hosted on: [Render](https://render.com)

## 🧰 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **Libraries**: Axios, CORS, dotenv, pg-promise

## 🛠 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/court-iq-server.git
cd court-iq-server
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file in the root directory

```env
PORT=3003
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=capstone_dev
PG_USER=postgres
FLASK_APP_URL=
```

### 4. Ensure PostgreSQL is running locally

### 5. Initialize and seed the database

```bash
npm run dbinit
npm run dbseed
```

### 6. Start the development server

```bash
node server.js
```

> 🧠 **Note:** This service forwards natural language queries to the search microservice. See: [court-iq-search](https://github.com/jorammercado/court-iq-search)

## 📄 License

Licensed under the [MIT License](https://opensource.org/license/mit).

## 📬 Contact

**Joram Mercado**
[GitHub](https://github.com/jorammercado) | [LinkedIn](https://www.linkedin.com/in/jorammercado)
