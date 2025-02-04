import { z } from "zod";

export const ERROR_MESSAGES = {
  requiredInput: "errorRequiredInput",
  requiredSelection: "errorRequiredSelection",
  requiredDate: "errorRequiredDate",
};

const nullableNumberSchema = z
  .union([
    z.literal(""),
    z.number({
      required_error: ERROR_MESSAGES.requiredInput,
      invalid_type_error: ERROR_MESSAGES.requiredInput,
    }).min(0, { message: "errorNumberBelowZero" }),
  ])
  .optional();

const valueSchema = z
  .number({
    required_error: ERROR_MESSAGES.requiredInput,
    invalid_type_error: ERROR_MESSAGES.requiredInput,
  })
  .min(0, { message: "errorNumberBelowZero" });

const unitSchema = z.enum(["g/dl", "mmol/l", "mg/%"], {
  required_error: ERROR_MESSAGES.requiredSelection,
  invalid_type_error: "errorInvalidUnit",
});

export const temperatureSchema = z
  .number({
    required_error: ERROR_MESSAGES.requiredInput,
    invalid_type_error: ERROR_MESSAGES.requiredInput,
  })
  .min(34, { message: "errorTemperatureMinValue" })
  .max(42, { message: "errorTemperatureMaxValue" });

export const HGBschema = z
  .object({
    value: valueSchema,
    unit: unitSchema,
  })
  .refine((data) => !(data.unit == "g/dl" && data.value > 20), {
    message: "errorHGBMaxValue1",
    path: ["value"],
  })
  .refine((data) => !(data.unit == "mmol/l" && data.value > 32), {
    message: "errorHGBMaxValue2",
    path: ["value"],
  });

export const WBCschema = z
  .object({
    value: valueSchema,
    unit: z.enum(["K/μl", "10^3/μl", "tys./μl", "G/l"]),
  })
  .refine((data) => !(data.value > 9999), {
    message: "errorWBCMaxValue",
    path: ["value"],
  });

export const PLTschema = z
  .object({
    value: valueSchema,
    unit: z.enum(["K/μl", "10^3/μl", "tys./μl", "G/l"]),
  })
  .refine((data) => !(data.value > 900), {
    message: "errorPLTMaxValue",
    path: ["value"],
  });

export const NEUTschema = z
  .object({
    value: valueSchema,
    unit: z.enum(["/μl", "K/μl", "10^3/μl", "tys./μl", "G/l"]),
  })
  .refine((data) => !(data.unit != "/μl" && data.value > 20), {
    message: "errorNEUTMaxValue1",
    path: ["value"],
  })
  .refine((data) => !(data.unit == "/μl" && data.value > 20000), {
    message: "errorNEUTMaxValue2",
    path: ["value"],
  });

export const ALTschema = z
  .object({
    value: nullableNumberSchema,
    unit: z.enum(["U/l"]).optional(),
  })
  .refine((data) => !(data.value && data.value > 9999), {
    message: "errorALTMaxValue",
    path: ["value"],
  });

export const ASTschema = z
  .object({
    value: nullableNumberSchema,
    unit: z.enum(["U/l"]).optional(),
  })
  .refine((data) => !(data.value && data.value > 9999), {
    message: "errorASTMaxValue",
    path: ["value"],
  });

export const dateSchema = z.date({
  errorMap: (issue, ctx) =>
    issue.code === z.ZodIssueCode.invalid_date
      ? { message: ERROR_MESSAGES.requiredDate }
      : { message: ctx.defaultError },
  coerce: true,
});

export const dropdownSchema = z
  .string({ required_error: ERROR_MESSAGES.requiredSelection })
  .min(1, { message: ERROR_MESSAGES.requiredSelection });
