import { BaseData } from "../../../data/base-data";
import { MultiResponse } from "../multi-response";
import { AbstractResponseBuilder } from "./abstract-response-builder";

export class MultiResponseBuilder<T extends BaseData> extends AbstractResponseBuilder<
	MultiResponse<T>
> {
	public static builder<I extends BaseData>(): MultiResponseBuilder<I> {
		return new MultiResponseBuilder<I>();
	}
}
