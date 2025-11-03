This project is a **fully working React + TypeScript application** built with **Vite**.

It meets the following requirements:

- React + TypeScript setup
- Fully functional filtering and search logic for users
- Switch between table and card views
- Modal for user detail
- Responsive layout (desktop and mobile)
- Light / Dark theme toggle
- Runs locally with a simple setup

### How to run locally

1. Clone this repository:

   ```bash
   git clone https://github.com/brezzi94/user-hub.git
   cd userhub

### Start project

1. Install dependencies:

   ```bash
   npm install

2. Start the development server:
   ```bash
   npm run dev
or npm start

3. Open the app in your browser:
   ```bash
   http://localhost:5173


### Notes

- The app uses mock data from /data/users.json, fetched locally to simulate an API.
- All functionality (filter, search, pagination, modal) works without an external backend.
- The project is self-contained, meaning anyone can install and run it locally using only Node.js and npm.


### Unit tests
Tests are implemented with Vitest e React Testing Library.

1. Installation:
    ```bash
    npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom

2. In vite.config.js:
   ```bash
   test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.ts",
   }

3. Add src/setupTests.ts:
   ```bash
   import "@testing-library/jest-dom";

4. Add a script in package.json:
   ```bash
   "scripts": {
     "test": "vitest --environment jsdom"
   }

5. Run:
   ```bash
   npm run test

Author: Claudia Breazzano
Frontend Developer — React + TypeScript
email: claudiabreazzano@gmail.com