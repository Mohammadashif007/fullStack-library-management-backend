import express, { Request, Response } from "express";
import cors from "cors";
import { BookRouters } from "./app/modules/books/books.routes";
import { BorrowRouters } from "./app/modules/borrow/borrow.routes";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
const app = express();

app.use(cors());
app.use(express.json());

// ! application api
app.use("/api", BookRouters);
app.use("/api", BorrowRouters);

// ! general routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// ! global error handler
app.use(globalErrorHandler);

export default app;
