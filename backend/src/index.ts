import { Hono } from "hono";

import { cors } from "hono/cors";
import { TodoRoute } from "./Route";
import { UserRoute } from "./User";

const app = new Hono();

app.use("/*", cors());
app.route("/api/v1/user", UserRoute);
app.route("/api/v1/todo", TodoRoute);


export default app;
