import { model, Schema } from "mongoose";
import { TBorrow } from "./borrow.interface";

const borrowSchema = new Schema<TBorrow>(
  {
    id: { type: Schema.Types.ObjectId, required: true },
    quantity: { type: Number, required: true },
    dueDate: { type: Date, required: true },
  },
  { timestamps: true },
);

export const Borrow = model<TBorrow>("Borrow", borrowSchema); 
