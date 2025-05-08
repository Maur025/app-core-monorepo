export const pipe = <T>(value: T, ...functions: Array<(input: any) => any>) =>
	functions.reduce((accumulator, func) => func(accumulator), value);
