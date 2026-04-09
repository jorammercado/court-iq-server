# 🏀 Court-IQ Backend Server

This is the **Express.js backend service** for the **Court-IQ** platform — a basketball analytics and sports betting application. It serves player images, provides historical NBA data via RESTful endpoints, and forwards search requests to a Flask-based microservice used for the prototype natural language search feature.

Live basketball stats, standings, and betting data on the frontend are consumed directly from third-party APIs rather than this backend service.

Authentication is handled via Firebase on the frontend. This service includes supporting infrastructure for user-related data that could be utilized for future application expansion.

## 📁 Contents

- [🌐 Deployed Server](#-deployed-server)
- [🔗 Related Repos](#-related-repos)
- [🚀 Deployment](#-deployment)
- [🧰 Tech Stack](#-tech-stack)
- [⚙️ Backend Functionality](#-backend-functionality)
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

## ⚙️ Backend Functionality

- Serve player images via RESTful endpoints
- Provide historical NBA data from PostgreSQL (not actively consumed by the frontend)
- Forward search requests to the Flask-based search microservice

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
FLASK_APP_URL= # URL of the court-iq-search microservice
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
