import z, { number, object, string } from "zod";

export const BaseResponse = object({
	code: number().nonnegative(),
	message: string().nonempty().optional(),
});

export type BaseResponse = z.infer<typeof BaseResponse>;
