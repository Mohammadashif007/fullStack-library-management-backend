import { NextFunction, Request, Response } from "express";
import { BookServices } from "./books.service";
import { validatedBooks, validatedPartialBooks } from "./books.validation";


interface QueryOptions {
  filter?: string;
  sortBy?: string;
  sort?: 'asc' | 'desc';
  limit?: number;
}

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body;
    const validatedBookData = validatedBooks.parse(data);
    const result = await BookServices.createBookIntoDB(validatedBookData);
    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { filter, sortBy, sort, limit } = req.query;
        const queryParams: QueryOptions = {
      filter: filter as string | undefined,
      sortBy: sortBy as string,
      sort: sort as 'asc' | 'desc',
      limit: limit ? Number(limit) : undefined,
    };

    const result = await BookServices.getAllBooksFromDB(queryParams);
    res.status(201).json({
      success: true,
      message: "All books retrieve successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

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
    const validatedUpdateBook = validatedPartialBooks.parse(updatedData);
    const result = await BookServices.updateBookIntoDB(
      bookId,
      validatedUpdateBook,
    );
    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: result,
    });
  } catch (error) {
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
