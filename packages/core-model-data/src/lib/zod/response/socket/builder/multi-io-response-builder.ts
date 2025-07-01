import { MultiIoResponse } from "../multi-io-response";
import { AbstractIoResponseBuilder } from "./abstract-io-response-builder";

export class MultiIoResponseBuilder<T> extends AbstractIoResponseBuilder<MultiIoResponse<T>> {
	public static builder<I>(): MultiIoResponseBuilder<I> {
		return new MultiIoResponseBuilder<I>();
	}
}
