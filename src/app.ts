/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Request, Response } from "express";
import cors from "cors";
import { BookRouters } from "./app/modules/books/books.routes";
import { BorrowRouters } from "./app/modules/borrow/borrow.routes";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";

import { notFound } from "./app/middleware/notFound";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["https://library-management-client-rouge.vercel.app"],
  }),
);

// ! application api
app.use("/api", BookRouters);
app.use("/api", BorrowRouters);

// ! general routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// ! API not found
app.use(notFound);

// ! global error handler
app.use(globalErrorHandler);

export default app;
