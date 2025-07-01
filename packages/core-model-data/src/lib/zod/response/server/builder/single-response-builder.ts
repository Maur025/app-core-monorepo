import { BaseData } from "../../../data/base-data";
import { SingleResponse } from "../single-response";
import { AbstractResponseBuilder } from "./abstract-response-builder";

export class SingleResponseBuilder<T extends BaseData> extends AbstractResponseBuilder<
	SingleResponse<T>
> {
	public static builder<I extends BaseData>(): SingleResponseBuilder<I> {
		return new SingleResponseBuilder<I>();
	}
}
