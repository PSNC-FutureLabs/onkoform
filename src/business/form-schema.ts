import { z } from "zod";

const ERROR_MESSAGES = {
  required: "Pole jest wymagane",
};

export const schema = z.object({
  birthday: z.date({
    errorMap: (issue, ctx) =>
      issue.code === z.ZodIssueCode.invalid_date
        ? { message: ERROR_MESSAGES.required }
        : { message: ctx.defaultError },
    coerce: true,
  }),
  gender: z.string({ required_error: ERROR_MESSAGES.required }),
  disease: z
    .string({ required_error: ERROR_MESSAGES.required })
    .min(1, { message: ERROR_MESSAGES.required }),
  hospitalWard: z
    .string({ required_error: ERROR_MESSAGES.required })
    .min(1, { message: ERROR_MESSAGES.required }),
  temperature: z
    .number({ required_error: ERROR_MESSAGES.required })
    .min(34, { message: "Minimalna wartość temperatury wynosi 34" })
    .max(42, { message: "Maksymalna wartość temperatury wynosi 42" }),
  "measurement-place": z.string({ required_error: ERROR_MESSAGES.required }),
  symptoms: z.string().array().optional(),
  otherSymptoms: z.string().optional(),
  "examination-date": z.date({
    errorMap: (issue, ctx) =>
      issue.code === z.ZodIssueCode.invalid_date
        ? { message: ERROR_MESSAGES.required }
        : { message: ctx.defaultError },
    coerce: true,
  }),
  HGB: z
    .object({
      value: z
        .number({
          required_error: ERROR_MESSAGES.required,
          invalid_type_error: ERROR_MESSAGES.required,
        })
        .min(0, { message: "Wartość musi być większa od zera" }),
      unit: z.enum(["g/dl", "mmol/l"]),
    })
    .refine((data) => !(data.unit == "g/dl" && data.value > 20), {
      message: "Dla jednostki g/dl maksymalna wartość to 20",
      path: ["value"],
    })
    .refine((data) => !(data.unit == "mmol/l" && data.value > 32), {
      message: "Dla jednostki mmol/l maksymalna wartość to 32",
      path: ["value"],
    }),
  WBC: z.number({
    required_error: ERROR_MESSAGES.required,
    invalid_type_error: ERROR_MESSAGES.required,
  }),
  PLT: z.number({
    required_error: ERROR_MESSAGES.required,
    invalid_type_error: ERROR_MESSAGES.required,
  }),
  ALT: z.number({
    required_error: ERROR_MESSAGES.required,
    invalid_type_error: ERROR_MESSAGES.required,
  }),
  AST: z.number({
    required_error: ERROR_MESSAGES.required,
    invalid_type_error: ERROR_MESSAGES.required,
  }),
  NEUT: z.number({
    required_error: ERROR_MESSAGES.required,
    invalid_type_error: ERROR_MESSAGES.required,
  }),
  NeutUnit: z.enum(["%", "μl"]),
  "examination-date2": z.date({
    errorMap: (issue, ctx) =>
      issue.code === z.ZodIssueCode.invalid_date
        ? { message: ERROR_MESSAGES.required }
        : { message: ctx.defaultError },
    coerce: true,
  }),
  HGB2: z
    .object({
      value: z
        .number({
          required_error: ERROR_MESSAGES.required,
          invalid_type_error: ERROR_MESSAGES.required,
        })
        .min(0, { message: "Wartość musi być większa od zera" }),
      unit: z.enum(["g/dl", "mmol/l"]),
    })
    .refine((data) => !(data.unit == "g/dl" && data.value > 20), {
      message: "Dla jednostki g/dl maksymalna wartość to 20",
      path: ["value"],
    })
    .refine((data) => !(data.unit == "mmol/l" && data.value > 32), {
      message: "Dla jednostki mmol/l maksymalna wartość to 32",
      path: ["value"],
    }),
  WBC2: z.number({
    required_error: ERROR_MESSAGES.required,
    invalid_type_error: ERROR_MESSAGES.required,
  }),
  PLT2: z.number({
    required_error: ERROR_MESSAGES.required,
    invalid_type_error: ERROR_MESSAGES.required,
  }),
  ALT2: z.number({
    required_error: ERROR_MESSAGES.required,
    invalid_type_error: ERROR_MESSAGES.required,
  }),
  AST2: z.number({
    required_error: ERROR_MESSAGES.required,
    invalid_type_error: ERROR_MESSAGES.required,
  }),
  NEUT2: z.number({
    required_error: ERROR_MESSAGES.required,
    invalid_type_error: ERROR_MESSAGES.required,
  }),
  Neut2Unit: z.enum(["%", "μl"]),
});
// .superRefine((values, context) => {
//   if (values.HgbUnit == "mmol/l" && values.HGB == 15) {
//     context.addIssue({
//       code: z.ZodIssueCode.custom,
//       message: "mmol/l nie może być równe 15",
//       path: ["HGB"],
//     });
//   }
// });

export type FormFields = z.infer<typeof schema>;
