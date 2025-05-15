import chalk from "chalk";
import { createLogger, format, transports } from "winston";
import { env } from "../config/env";

const { combine, timestamp, printf, json } = format;
const { cyan, red, yellow, green, white, gray, magenta, blue } = chalk;

const DATE_FORMAT = "YYYY-MM-DD HH:mm:ss";

export default class LoggerWinston {
	private readonly logger;

	constructor() {
		this.logger = createLogger({
			format: combine(timestamp({ format: DATE_FORMAT }), json()),
			transports: [
				new transports.Console({
					level: env.LOG_LEVEL,
					format: combine(
						timestamp({ format: DATE_FORMAT }),
						printf(({ level, message, timestamp }) => {
							const timestampColored = gray(`${timestamp}`);

							const levelUpper: string = level.toUpperCase();
							const levelColored: string = this.coloredByLevel(
								levelUpper,
								levelUpper,
							);

							const messageColored: string = this.highlightMessage(
								levelUpper,
								message?.toString() ?? "",
							);

							return `[${timestampColored}] [${levelColored}]: ${messageColored}`;
						}),
					),
				}),
			],
		});
	}

	private readonly coloredByLevel = (level: string, text: string): string => {
		switch (level) {
			case "ERROR":
				return red(text);
			case "WARN":
				return yellow(text);
			case "INFO":
				return cyan(text);
			case "HTTP":
				return magenta(text);
			case "VERBOSE":
				return blue(text);
			case "DEBUG":
				return green(text);
			case "SILLY":
				return gray(text);
			default:
				return white(text);
		}
	};

	private readonly highlightMessage = (level: string, text: string): string => {
		const color = (text: string) => this.coloredByLevel(level, text);

		return text
			.replace(/\[(.*?)\]/g, (_, content) => color(`[${content}]`))
			.replace(/(https?:\/\/\S+)/g, (_, url) => chalk.underline.gray(url))
			.replace(/'([^']+)'/g, (_, quoted) => color(`'${quoted}'`))
			.replace(/"([^"]+)"/g, (_, quoted) => color(`"${quoted}"`))
			.replace(/\b([A-Z_]{2,})\b/g, (match) => color(match));
	};

	public getLogger() {
		return this.logger;
	}
}
