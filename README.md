# NoSQL, Node.js & Express.js Starter Pack

> Setting up a Node.js and Express.js project from scratch can be repetitive. With this starter pack, you no longer need to configure everything manually. Just clone the repository, connect connect your `DATABASE_URL`, and you are ready to kick off your project!

## 🚀 Key features
- ✅ TypeScript Integration: Strong Typing and error checking for safe code.
- ✅ Modular Folder Structure: Organized directories like controllers/, route/, server/, /models for clean architecture.
- ✅ Environment Variable Support: .env file handling for secure configuration.
- ✅ Development Workflow Tools: Includes ts-node for hot-reloading during development
- ✅ Linting and Formatting: Preconfigured ESLint and Prettier for consistent and clean code.


## 📦 Tech Stack
- Node.js
- Express
- MongoDB
- TypeScript



## ⚙️ Installation

```
git clone https://github.com/Mohammadashif007/NoSQL-project-setup-starter-pack.git
cd NoSQL-project-setup-starter-pack
npm install

```


## 🧪 Running the App

```
# Start development server
npm run start:dev

# OR build and run production
npm run build
node dist/server.js
```


🔐 Environment Variables
Create a .env file in the root and add:

```
PORT=3000
MONGO_URI=your_mongo_connection_string
```

