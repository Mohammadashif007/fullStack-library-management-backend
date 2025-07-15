import { Types } from "mongoose";

export type TBorrow = {
  book: Types.ObjectId | string;
  quantity: number;
  dueDate: Date;
};
