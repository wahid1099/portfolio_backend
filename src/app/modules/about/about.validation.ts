import { z } from "zod";

export const aboutValidationSchema = z.object({
  body: z.object({
    name: z.string().default("ABDUL WAHID"),
    bio: z.string().nonempty("Bio is required"),
    age: z.number().default(() => new Date().getFullYear() - 2003),
    designation: z
      .string()
      .default("Competitive Programmer && Software Engineer"),
    description: z.string().nonempty(""),
  }),
});
