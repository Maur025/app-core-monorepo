import z, { number, object, string } from "zod/v4";

export const BaseResponse = object({
	code: number().nonnegative(),
	message: string().nonempty().optional(),
});

export type BaseResponse = z.infer<typeof BaseResponse>;
