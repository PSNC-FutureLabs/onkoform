import { z } from "zod";

export const schema = z.object({
  birthday: z.date({
    errorMap: (issue, ctx) =>
      issue.code === z.ZodIssueCode.invalid_date
        ? { message: "Data urodzenia jest wymagana" }
        : { message: ctx.defaultError },
    coerce: true,
  }),
  gender: z.string(),
  disease: z.string(),
  hospitalWard: z.string(),
});

export type FormFields = z.infer<typeof schema>;
