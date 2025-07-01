import { SingleIoResponse } from "../single-io-response";
import { AbstractIoResponseBuilder } from "./abstract-io-response-builder";

export class SingleIoResponseBuilder<T> extends AbstractIoResponseBuilder<SingleIoResponse<T>> {
	public static builder<I>(): SingleIoResponseBuilder<I> {
		return new SingleIoResponseBuilder<I>();
	}
}
