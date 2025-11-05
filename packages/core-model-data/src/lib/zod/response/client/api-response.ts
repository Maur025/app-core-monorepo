import z, { any, number, object, string } from "zod";
import { BaseData } from "../../data/base-data";

export const ApiResponse = object({
	code: number().nonnegative().optional(),
	success: string().nonempty().optional(),
	message: string().nonempty().optional(),
	data: any().optional(),
	content: any().optional(),
});

export type ApiResponse<T extends BaseData> = Omit<
	z.infer<typeof ApiResponse>,
	"data" | "content"
> & {
	data?: T | T[];
	content?: T | T[];
};
