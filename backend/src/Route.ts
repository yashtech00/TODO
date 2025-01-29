import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createdInput, updatedInput } from "@yashgtech007/common-todos-item";
import { verify } from "hono/jwt";



export const TodoRoute = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

TodoRoute.use("*", async (c, next) => {
  const header = c.req.header("Authorization") || "";

  try {
    const user = await verify(header, c.env.JWT_SECRET);
    if (user) {
      c.set("userId", user.id);
      await next();
    } else {
      c.status(403);
      return c.json({ message: "you are not logged In" });
    }
  } catch (e) {
    c.status(403);
    return c.json({ message: "you are not logged In" });
  }
});

TodoRoute.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const userId = c.get("userId");
  console.log(body,"yash bogy");
  
  const { success } = createdInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ message: "Add a valid Content-Length Inputs" });
  }
  try {
    const UsId = Number(userId);
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        status: body.status,
        authorId: UsId,
      },
    });
    console.log(post,"json");
    
    c.status(200);
    return c.json({
      message: "Todo created successfully",
      id: post.id,
      title: post.title,
      content: post.content,
      status: post.status,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    });
  } catch (err) {
    console.error('Signup error:', err.message); // Log the error message  
    console.error(err); // Log the entire error for more context  
    c.status(403);
    return c.json({ message: "Error creating Todo" ,error:err.message});
  }
});
TodoRoute.put("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const Id = c.req.param("id");
  const userId = c.get("userId");
  const { success } = updatedInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ message: "Add a valid Content-Length Inputs" });
  }
  try {
    const uId = Number(Id)
    const UsId = Number(userId);
    const post = await prisma.post.update({
      where: {
        id: uId,
        authorId: UsId,
      },
      data: {
        title: body.title,
        content: body.content,
        status: body.status,
      },
    });
    c.status(200);
    return c.json({
      message: "Todo updated successfully",

      updatedAt: post.updatedAt,
    });
  } catch (e) {
    c.status(403);
    return c.json({ message: "Error updating Todo" });
  }
});
TodoRoute.delete("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

 
  const Id = c.req.param("id");
  const userId = c.get("userId");
  try {
    const UsId = Number(userId)
    const delId = Number(Id);
    if (!delId) {
      c.status(403);
      return c.json({ message: "Wrong Id format" });
    }
    const existingNote = await prisma.post.findUnique({
      where: {
        id: delId,
      },
    });
    if (!existingNote || existingNote.authorId != UsId) {
      c.status(404);
      return c.json({ message: "todo not found or does not belong to you" });
    }
    await prisma.post.delete({
      where: {
        id: delId,
      },
    });

    c.status(200);
    return c.json({
      message: "Todo deleted successfully",
    });
  } catch (e) {
    c.status(403);
    return c.json({ message: "Error Deleting Todo" });
  }
});
TodoRoute.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  
  const userId = c.get("userId");

  try {
    const UsId = Number(userId);
    const post = await prisma.post.findMany({
      where: {
        authorId: UsId,
      },
      select: {
        title: true,
        content: true,
        status: true,
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    c.status(200);
    return c.json({
      message: "all Todo show successfully",
      post,
    });
  } catch (e) {
    c.status(403);
    return c.json({ message: "Error getting all Todo" });
  }
});
