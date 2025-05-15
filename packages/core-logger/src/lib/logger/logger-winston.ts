import chalk from "chalk";
import { createLogger, format, transports } from "winston";
import { env } from "../config/env";
import { existsSync, mkdirSync } from "node:fs";
import path from "node:path";

const { combine, timestamp, printf, json } = format;
const { cyan, red, yellow, green, white, gray, magenta, blue } = chalk;

const DATE_FORMAT = "YYYY-MM-DD HH:mm:ss";

export default class LoggerWinston {
	private readonly logger;

	constructor() {
		this.ensureLogDir();

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
				new transports.File({
					filename: path.join(env.LOG_PATH, "app.log"),
					level: "info",
				}),
				new transports.File({
					filename: path.join(env.LOG_PATH, "error.log"),
					level: "error",
				}),
			],
		});
	}

	private ensureLogDir() {
		try {
			if (!existsSync(env.LOG_PATH)) {
				mkdirSync(env.LOG_PATH, { recursive: true });
			}
		} catch (error) {
			console.log(`Error in add dir [${env.LOG_PATH}] in your project`, error);
		}
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
