import { Books } from "../books/books.model";
import { TBorrow } from "./borrow.interface";
import { Borrow } from "./borrow.model";

const createBorrowIntoDB = async (payload: TBorrow) => {
  //! Static method implementation
  const book = await Books.findById(payload.book);
 
  if (!book) {
    throw new Error("Book not found");
  }
  if (book.copies < payload.quantity) {
    throw new Error("Insufficient book stock");
  }
  if (payload.quantity < 0) {
    throw new Error("Negative number can't be acceptable");
  }
  book.copies -= payload.quantity;
  if (book.copies === 0) {
    book.available = false;
  }
  // ! instance method implementation
  await book.save();
  //! Static method implementation
  const result = await Borrow.create(payload);
  return result;
};


const getBorrowedBooks = async () => {
  const result = await Borrow.aggregate([
    {
      $group: {
        _id: "$book",
        totalQuantity: { $sum: "$quantity" },
      },
    },
    {
      $lookup: {
        from: "books", 
        localField: "_id",
        foreignField: "_id",
        as: "bookDetails",
      },
    },
    {
      $unwind: "$bookDetails",
    },
    {
      $project: {
        _id: 0,
        book: "$_id",
        totalQuantity: 1,
        bookDetails: {
          title: "$bookDetails.title",
          isbn: "$bookDetails.isbn",
        },
      },
    },
  ]);

  return result;
};

export const BorrowServices = {
  createBorrowIntoDB,
  getBorrowedBooks
};
