import z, { number } from "zod";
import { BaseData } from "./base-data";

export const BaseDataAudit = BaseData.extend({
	create_date: number().nonnegative().optional(),
	update_date: number().nonnegative().optional(),
});

export type BaseDataAudit = z.infer<typeof BaseDataAudit>;
