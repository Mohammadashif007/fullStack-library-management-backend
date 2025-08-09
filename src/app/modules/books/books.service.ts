import { TBook } from "./books.interface";
import { Books } from "./books.model";

type QueryOptions = {
  filter?: string;
  sortBy?: string;
  sort?: string;
  limit?: number;
};

// ! post request
const createBookIntoDB = async (book: TBook) => {
  const result = await Books.create(book);
  return result;
};

// !get request, retrieve all books
const getAllBooksFromDB = async (queryParams: QueryOptions) => {
  const { filter, sortBy, sort, limit } = queryParams;
  const queryObject: { genre?: object } = {};
  if (filter) {
    queryObject.genre = { $regex: filter, $options: "i" };
  }
  const baseQuery = Books.find(queryObject);
  if (sortBy) {
    const sortOrder = sort === "desc" ? -1 : 1;
    baseQuery.sort({ [sortBy as string]: sortOrder });
  }

  baseQuery.limit(limit ?? 10);
  const result = await baseQuery;
  return result;
};

// ! single book retrieve from db
const getSingleBookFromDB = async (id: string) => {
  const result = await Books.findById(id);
  return result;
};

// ! delete book from db
const deleteBookFromDB = async (id: string) => {
  const result = await Books.findByIdAndDelete(id);
  return result;
};

const updateBookInfo = async (id: string, payload: TBook) => {
  if (payload.copies < 0) {
    throw new Error("Updated Copies can't be zero or negative");
  }
  const result = await Books.findByIdAndUpdate(
    id,
    { ...payload, available: payload.copies === 0 ? false : true },
    { new: true },
  );
  return result;
};

export const BookServices = {
  createBookIntoDB,
  getAllBooksFromDB,
  getSingleBookFromDB,
  deleteBookFromDB,
  updateBookInfo,
  // updateBookIntoDB,
};
