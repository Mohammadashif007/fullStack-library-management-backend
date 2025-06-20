import { Request, Response } from "express";
import { BookServices } from "./books.service";

const createBook = async (req: Request, res: Response) => {
  const data = req.body;
  const result = await BookServices.createBookIntoDB(data);
  res.status(201).json({
    success: true,
    message: "Book created successfully",
    data: result,
  });
};

const getAllBooks = async (req: Request, res: Response) => {
  const result = await BookServices.getAllBooksFromDB();
  res.status(201).json({
    success: true,
    message: "All books retrieve successfully",
    data: result,
  });
};

const getSingleBook = async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const result = await BookServices.getSingleBookFromDB(bookId);
  res.status(200).json({
    success: true,
    message: "Book retrieved successfully",
    data: result,
  });
};

const deleteBook = async (req: Request, res: Response) => {
  const { bookId } = req.params;
  await BookServices.deleteBookFromDB(bookId);
  res.status(200).json({
    success: true,
    message: "Book deleted successfully",
    data: null,
  });
};

const updateBook = async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const updatedData = req.body;
  const result = await BookServices.updateBookIntoDB(bookId, updatedData);
  res.status(200).json({
    success: true,
    message: "Book updated successfully",
    data: result,
  });
};

export const BookControllers = {
  createBook,
  getAllBooks,
  getSingleBook,
  deleteBook,
  updateBook,
};
