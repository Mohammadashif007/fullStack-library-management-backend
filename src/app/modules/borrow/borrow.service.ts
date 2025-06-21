import { Books } from "../books/books.model";
import { TBorrow } from "./borrow.interface";
import { Borrow } from "./borrow.model";

const createBorrowIntoDB = async (payload: TBorrow) => {
  const book = await Books.findById(payload.book);
  if (!book) {
    throw new Error("Book not found");
  }
  if (book.copies < payload.quantity) {
    throw new Error("Insufficient book stock");
  }
  book.copies -= payload.quantity;
  if (book.copies === 0) {
    book.available = false;
  }
  await book.save();
  const result = await Borrow.create(payload);
  return result;
};

export const BorrowServices = {
  createBorrowIntoDB,
};
