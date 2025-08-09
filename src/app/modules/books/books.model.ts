import { model, Schema } from "mongoose";
import { TBook } from "./books.interface";

const bookSchema = new Schema<TBook>(
  {
    title: { type: String, required: [true, "title is required"] },
    author: { type: String, required: [true, "author is required"] },
    genre: { type: String, required: [true, "genre is required"] },
    isbn: { type: Number, required: [true, "isbn is required"] },
    copies: {
      type: Number,
      required: [true, "copies is required"],
    },
    available: {
      type: Boolean,
      required: [true, "available value is required"],
    },
  },
  { timestamps: true },
);

// ! pre hook middleware
bookSchema.pre("save", function (next) {
  next();
});

// ! post hook middleware
bookSchema.post("save", function (doc, next) {
  next();
});

export const Books = model<TBook>("Book", bookSchema);
