import { z } from "zod";

const borrowFields = {
  book: z.string({ required_error: "Book ID is required" }),
  quantity: z.coerce
    .number({ required_error: "Quantity is required" })
    .int("Must be an integer")
    .positive("Must be greater than 0"),
dueDate: z
  .string({ required_error: "Due date is required" })
  .refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  })
  .transform((val) => new Date(val)),
};

export const createBorrowZodSchema = z.object(borrowFields);
