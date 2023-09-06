import * as z from "zod";

export const UserValidation = z.object({
  vechileImage: z.string().url().nonempty(),
  name: z.string(),
  vechile_number: z.string(),
  vechileType: z.string(),
});
