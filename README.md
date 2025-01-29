# Todo App

This is a simple todo application built with the following tech stack:

**Backend:**

* **Node.js:** Runtime environment for JavaScript.
* **TypeScript:** Statically typed superset of JavaScript.
* **Prisma:** Object-Relational Mapper (ORM) for database interactions.
* **PostgreSQL:** Relational database system.
* **Zod:** Data validation and type safety library.

**Frontend:**

* **React.js:** JavaScript library for building user interfaces.
* **Tailwind CSS:** Utility-first CSS framework.

**Features:**

* **User Authentication:**
    * Signup
    * Signin
* **Todo Management:**
    * **Home Page:**
        * View all todos.
        * Search for todos by title or content.
        * Add new todos.
        * Edit existing todos.
        * Delete todos.
* **Responsive Design:** The application is designed to be responsive and work well on different screen sizes.

**Getting Started:**

1. **Clone the repository:**
   ```bash
   git clone <repository_url>

2. **Install dependencies:**
   ```bash
    cd todo-app
   npm install

3. **Set up environment variables:**
   * Create a .env file in the root directory.
   * Add the following environment variables:
      * DATABASE_URL: Connection string for your PostgreSQL database.
      * JWT_SECRET: Secret key for JWT authentication.

4. **Run the development server**
   ```bash
   npm run dev
