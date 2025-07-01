import z, { object, string } from "zod/v4";

export const BaseIoResponse = object({
	id: string().nonempty(),
	timestamp: string().nonempty(),
	eventType: string().nonempty().optional().nullable(),
	message: string().nonempty().optional().nullable(),
});

export type BaseIoResponse = z.infer<typeof BaseIoResponse>;
