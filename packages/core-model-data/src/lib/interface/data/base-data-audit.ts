import { BaseData } from "./base-data";

export interface BaseDataAudit extends BaseData {
	create_date?: number;
	update_date?: number;
}
