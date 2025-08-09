import { NextFunction, Request, Response } from "express";
import { BookServices } from "./books.service";

interface QueryOptions {
  filter?: string;
  sortBy?: string;
  sort?: "asc" | "desc";
  limit?: number;
}

// ! create book into db
const createBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BookServices.createBookIntoDB(req.body);
    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// ! get all book from db
const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { filter, sortBy, sort, limit } = req.query;
    const queryParams: QueryOptions = {
      filter: filter as string | undefined,
      sortBy: sortBy as string,
      sort: sort as "asc" | "desc",
      limit: limit ? Number(limit) : undefined,
    };

    const result = await BookServices.getAllBooksFromDB(queryParams);

    res.status(200).json({
      success: true,
      message: "All books retrieve successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// ! get single book from db
const getSingleBook = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { bookId } = req.params;
    const result = await BookServices.getSingleBookFromDB(bookId);
    res.status(200).json({
      success: true,
      message: "Book retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// ! delete book from db
const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { bookId } = req.params;
    await BookServices.deleteBookFromDB(bookId);
    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

const updateBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { bookId } = req.params;
    const updatedData = req.body;
    const result = await BookServices.updateBookInfo(bookId, updatedData);

    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: result,
    });
  } catch (error) {
    console.error("❌ Controller Error:", error);
    next(error);
  }
};

export const BookControllers = {
  createBook,
  getAllBooks,
  getSingleBook,
  deleteBook,
  updateBook,
};
