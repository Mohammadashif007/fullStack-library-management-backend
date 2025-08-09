import express from "express";
import { BookControllers } from "./books.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { createBookZodSchema, updateBookZodSchema } from "./books.validation";


const router = express.Router();

router.post(
  "/books",
  validateRequest(createBookZodSchema),
  BookControllers.createBook,
);
router.get("/books/:bookId", BookControllers.getSingleBook);
router.delete("/books/:bookId", BookControllers.deleteBook);
router.patch(
  "/books/:bookId",
  validateRequest(updateBookZodSchema),
  BookControllers.updateBook,
);
router.get("/books", BookControllers.getAllBooks);

export const BookRouters = router;
