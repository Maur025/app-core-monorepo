import z, { boolean, object, preprocess, string } from "zod/v4";

export const BaseData = object({
	id: preprocess((value) => {
		if (value == null) return undefined;

		return String(value);
	}, string().nonempty()).optional(),
	deleted: boolean().optional(),
});

export type BaseData = z.infer<typeof BaseData>;
