import { TBorrow } from "./borrow.interface";
import { Borrow } from "./borrow.model";

const createBorrowIntoDB = async (payload: TBorrow) => {
  const result = await Borrow.create(payload);
  return result;
};

export const BorrowServices = {
  createBorrowIntoDB,
};
