import { Request, Response } from "express";
import { BorrowServices } from "./borrow.service";

const createBorrow = async (req: Request, res: Response) => {
  const borrowData = req.body;
  const result = await BorrowServices.createBorrowIntoDB(borrowData);
  res.status(201).json({
    success: true,
    message: "Book borrowed successfully",
    data: result,
  });
};

export const BorrowControllers = {
  createBorrow,
};
