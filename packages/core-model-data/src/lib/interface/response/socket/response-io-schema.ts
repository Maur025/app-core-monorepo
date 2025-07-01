import { z } from "zod";

export const ResponseIoSchema = z.object({
	id: z.string().uuid(),
	timestamp: z.string().datetime(),
	eventType: z.string().nullable().optional(),
	message: z.string().nullable().optional(),
	data: z.any().nullable().optional(),
});
