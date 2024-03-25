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
  disease: z.string({ required_error: ERROR_MESSAGES.required }),
  hospitalWard: z.string({ required_error: ERROR_MESSAGES.required }),
  temperature: z.string({ required_error: ERROR_MESSAGES.required }),
  "measurement-place": z.string({ required_error: ERROR_MESSAGES.required }),
  symptoms: z.string().array().optional(),
  "examination-date": z.date({
    errorMap: (issue, ctx) =>
      issue.code === z.ZodIssueCode.invalid_date
        ? { message: ERROR_MESSAGES.required }
        : { message: ctx.defaultError },
    coerce: true,
  }),
  HGB: z.string({ required_error: ERROR_MESSAGES.required }),
  HgbUnit: z.string(),
  WBC: z.string({ required_error: ERROR_MESSAGES.required }),
  PLT: z.string({ required_error: ERROR_MESSAGES.required }),
  ALT: z.string({ required_error: ERROR_MESSAGES.required }),
  AST: z.string({ required_error: ERROR_MESSAGES.required }),
  NEUT: z.string({ required_error: ERROR_MESSAGES.required }),
  NeutUnit: z.string(),
  "examination-date2": z.date({
    errorMap: (issue, ctx) =>
      issue.code === z.ZodIssueCode.invalid_date
        ? { message: ERROR_MESSAGES.required }
        : { message: ctx.defaultError },
    coerce: true,
  }),
  HGB2: z.string({ required_error: ERROR_MESSAGES.required }),
  Hgb2Unit: z.string(),
  WBC2: z.string({ required_error: ERROR_MESSAGES.required }),
  PLT2: z.string({ required_error: ERROR_MESSAGES.required }),
  ALT2: z.string({ required_error: ERROR_MESSAGES.required }),
  AST2: z.string({ required_error: ERROR_MESSAGES.required }),
  NEUT2: z.string({ required_error: ERROR_MESSAGES.required }),
  Neut2Unit: z.string(),
});

export type FormFields = z.infer<typeof schema>;
