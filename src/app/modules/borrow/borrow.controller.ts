import { Request, Response } from "express";
import { BorrowServices } from "./borrow.service";
import { createBorrowZodSchema } from "./borrow.validation";

const createBorrow = async (req: Request, res: Response) => {
  const borrowData = req.body;
  // console.log(borrowData);

  const validatedBorrowData = createBorrowZodSchema.parse(borrowData);
  console.log(validatedBorrowData);
  const result = await BorrowServices.createBorrowIntoDB(validatedBorrowData);

  res.status(201).json({
    success: true,
    message: "Book borrowed successfully",
    data: result,
  });
};

const getBorrow = async (req: Request, res: Response) => {
  const result = await BorrowServices.getBorrowedBooks();
  res.status(201).json({
    success: true,
    message: "Borrow aggregation retrieve successfully",
    data: result,
  });
};

export const BorrowControllers = {
  createBorrow,
  getBorrow,
};
