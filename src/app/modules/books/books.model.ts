import { model, Schema } from "mongoose";
import { TBook } from "./books.interface";

const bookSchema = new Schema<TBook>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    isbn: { type: String, required: true },
    description: { type: String, required: true },
    copies: { type: Number, required: true },
    available: { type: Boolean, required: true },
  },
  { timestamps: true },
);

export const Books = model<TBook>("Book", bookSchema);
