import z, { boolean, object, string } from "zod/v4";

export const BaseData = object({
	id: string().nonempty().optional(),
	deleted: boolean().optional(),
});

export type BaseData = z.infer<typeof BaseData>;
