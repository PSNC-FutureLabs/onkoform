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
});

export type FormFields = z.infer<typeof schema>;
