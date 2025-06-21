import { z } from "zod";

export const validatedBooks = z.object({
  title: z.string(),
  author: z.string(),
  genre: z.string(),
  isbn: z.string(),
  description: z.string(),
  copies: z.number(),
  available: z.boolean(),
});


export const validatedPartialBooks = validatedBooks.partial();