import { z } from "zod";

export const ERROR_MESSAGES = {
  required: "Pole jest wymagane",
};

const valueSchema = z
  .number({
    required_error: ERROR_MESSAGES.required,
    invalid_type_error: ERROR_MESSAGES.required,
  })
  .min(0, { message: "Wartość nie może być ujemna" });

export const HGBschema = z
  .object({
    value: valueSchema,
    unit: z.enum(["g/dl", "mmol/l"]),
  })
  .refine((data) => !(data.unit == "g/dl" && data.value > 20), {
    message: "Dla jednostki g/dl maksymalna wartość to 20",
    path: ["value"],
  })
  .refine((data) => !(data.unit == "mmol/l" && data.value > 32), {
    message: "Dla jednostki mmol/l maksymalna wartość to 32",
    path: ["value"],
  });

export const NEUTschema = z.object({
  value: valueSchema,
  unit: z.enum(["%", "μl"]),
});

export const WBCschema = z.object({
  value: valueSchema,
});
export const PLTschema = z.object({
  value: valueSchema,
});
export const ALTschema = z.object({
  value: valueSchema,
});
export const ASTschema = z.object({
  value: valueSchema,
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

export const temperatureSchema = z
  .number({ required_error: ERROR_MESSAGES.required })
  .min(34, { message: "Minimalna wartość temperatury wynosi 34" })
  .max(42, { message: "Maksymalna wartość temperatury wynosi 42" });
