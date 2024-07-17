import { z } from "zod";

export const ERROR_MESSAGES = {
	required: "Wartość jest wymagana",
};

const nullableNumberSchema = z.number().nullable();

const valueSchema = z
	.number({
		required_error: ERROR_MESSAGES.required,
		invalid_type_error: ERROR_MESSAGES.required,
	})
	.min(0, { message: "Wartość nie może być ujemna" });

export const temperatureSchema = z
	.number({ required_error: ERROR_MESSAGES.required, invalid_type_error: ERROR_MESSAGES.required })
	.min(34, { message: "Minimalna wartość temperatury wynosi 34°C" })
	.max(42, { message: "Maksymalna wartość temperatury wynosi 42°C" });

export const HGBschema = z
	.object({
		value: valueSchema,
		unit: z.enum(["g/dl", "mmol/l", "mg/%"]),
	})
	.refine((data) => !(data.unit == "g/dl" && data.value > 20), {
		message: "Dla jednostki g/dl maksymalna wartość to 20",
		path: ["value"],
	})
	.refine((data) => !(data.unit == "mmol/l" && data.value > 32), {
		message: "Dla jednostki mmol/l maksymalna wartość to 32",
		path: ["value"],
	});

export const WBCschema = z
	.object({
		value: valueSchema,
		unit: z.enum(["K/μl", "10^3/μl", "tys./μl", "G/l"]),
	})
	.refine((data) => !(data.value > 30), {
		message: "maksymalna wartość parametru: 30",
		path: ["value"],
	});

export const PLTschema = z
	.object({
		value: valueSchema,
		unit: z.enum(["K/μl", "10^3/μl", "tys./μl", "G/l"]),
	})
	.refine((data) => !(data.value > 900), {
		message: "maksymalna wartość parametru: 900",
		path: ["value"],
	});

export const NEUTschema = z
	.object({
		value: valueSchema,
		unit: z.enum(["#/μl", "K/μl", "10^3/μl", "tys./μl", "G/l"]),
	})
	.refine((data) => !(data.unit != "#/μl" && data.value > 20), {
		message: "maksymalna wartość parametru: 20",
		path: ["value"],
	})
	.refine((data) => !(data.unit == "#/μl" && data.value > 20000), {
		message: "maksymalna wartość parametru: 20000",
		path: ["value"],
	});

export const ALTschema = z
	.object({
		value: nullableNumberSchema,
		unit: z.enum(["U/l"]),
	})
	.refine((data) => !(data.value && data.value > 99), {
		message: "maksymalna wartość parametru: 99",
		path: ["value"],
	});

export const ASTschema = z
	.object({
		value: nullableNumberSchema,
		unit: z.enum(["U/l"]),
	})
	.refine((data) => !(data.value && data.value > 99), {
		message: "maksymalna wartość parametru: 99",
		path: ["value"],
	});

export const dateSchema = z.date({
	errorMap: (issue, ctx) =>
		issue.code === z.ZodIssueCode.invalid_date
			? { message: ERROR_MESSAGES.required }
			: { message: ctx.defaultError },
	coerce: true,
});

export const dropdownSchema = z
	.string({ required_error: ERROR_MESSAGES.required })
	.min(1, { message: ERROR_MESSAGES.required });
