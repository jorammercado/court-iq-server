# Court-IQ Server

This is the backend service for the Court-IQ platform — a basketball analytics and sports betting application. The server handles player image hosting, stores a rich archive of historical NBA data (50+ years), and includes user management infrastructure built to support future personalization features. While the historical data is not yet surfaced in the frontend, it is fully structured and ready for integration.

Additionally, this backend communicates with a connected Flask microservice that powers the search functionality (currently under development) and is designed to scale with added features.

## Contents
- [Deployed Server Access](#deployed-server-access)
- [GitHub Repositories](#github-repositories)
- [Deployment](#deployment)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [License](#license)
- [Contact](#contact)

## Deployed Server Access
[Live API Server](https://courtiq.onrender.com)

## GitHub Repositories
- **Frontend**: [github.com/jorammercado/court-iq](https://github.com/jorammercado/court-iq)
- **Backend**: [github.com/jorammercado/court-iq-server](https://github.com/jorammercado/court-iq-server)

## Deployment
Deployed and Hosted on [Render](https://render.com)

## Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **Other**: Axios, CORS, dotenv, pg-promise

## Installation

1. Fork the repository from [github.com/jorammercado/court-iq-server](https://github.com/jorammercado/court-iq-server).

2. Clone the repository:
   ```bash
   git clone https://github.com/your-username/court-iq-server.git
   ```
3. Navigate into the project directory:
   ```bash
   cd court-iq-server
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Create a `.env` file in the root with your environment variables (e.g., PORT, API_KEYS).
   ```
   PORT=3003
   PG_HOST=localhost
   PG_PORT=5432
   PG_DATABASE=capstone_dev
   PG_USER=postgres
   FLASK_APP_URL=
   ```
6. Ensure PostgreSQL is running locally.
7. Run the SQL scripts to set up the database schema and seed data:
   ```bash
   npm run dbinit
   npm run dbseed
   ```
8. Start the development server:
   ```bash
   node server.js
   ```

> Note: This server communicates with a Flask microservice for search functionality. You can find it here: [Search Bar](https://github.com/jorammercado/flask-app). At the time of writing, the search system is still under development.

## License
This project is licensed under the MIT License. See the [LICENSE](https://opensource.org/license/mit) file for details.

## Contact
**Joram Mercado**  
[GitHub](https://github.com/jorammercado) | [LinkedIn](https://www.linkedin.com/in/jorammercado)