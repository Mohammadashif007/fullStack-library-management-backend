import { TBook } from "./books.interface";
import { Books } from "./books.model";

const createBookIntoDB = async (book: TBook) => {
  const result = await Books.create(book);
  return result;
};
const getAllBooksFromDB = async () => {
  const result = await Books.find();
  return result;
};
const getSingleBookFromDB = async (id: string) => {
  const result = await Books.findById(id);
  return result;
};
const deleteBookFromDB = async (id: string) => {
  const result = await Books.findByIdAndDelete(id);
  return result;
};
const updateBookIntoDB = async (id: string, payload: Partial<TBook>) => {
  const result = await Books.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const BookServices = {
  createBookIntoDB,
  getAllBooksFromDB,
  getSingleBookFromDB,
  deleteBookFromDB,
  updateBookIntoDB,
};
