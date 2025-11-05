import z, { boolean, number, object, string } from "zod";

export const ErrorCauseResponse = object({
	code: string().optional(),
	message: string().optional(),
});

export const ErrorResponse = object({
	status: number().optional(),
	message: string().optional(),
	error: boolean().optional(),
	cause: ErrorCauseResponse.optional(),
});

export type ErrorCauseResponse = z.infer<typeof ErrorCauseResponse>;
export type ErrorResponse = z.infer<typeof ErrorResponse>;
