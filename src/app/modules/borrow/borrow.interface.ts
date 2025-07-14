import { Types } from "mongoose";

export type TBorrow = {
  id: Types.ObjectId;
  quantity: number;
  dueDate: Date;
};
