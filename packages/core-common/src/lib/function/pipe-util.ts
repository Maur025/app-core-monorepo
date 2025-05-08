// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const pipe = <T>(value: T, ...functions: Array<(input: any) => any>) =>
	functions.reduce((accumulator, func) => func(accumulator), value);
