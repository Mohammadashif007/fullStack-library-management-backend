import express, { Request, Response } from "express";
import cors from "cors";
import { BookRouters } from "./app/modules/books/books.routes";
const app = express();

app.use(cors());
app.use(express.json());

// ! application api
app.use("/api", BookRouters);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
