import z, { number, object } from "zod";

export const PaginateResponse = object({
	pages: number().nonnegative(),
	count: number().nonnegative(),
	page: number().nonnegative().optional(),
});

export type PaginateResponse = z.infer<typeof PaginateResponse>;
