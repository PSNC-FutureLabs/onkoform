import { z } from "zod";

export const ERROR_MESSAGES = {
  requiredInput: "errorRequiredInput",
  requiredSelection: "errorRequiredSelection",
  requiredDate: "errorRequiredDate",
  numberBelowZero: "errorNumberBelowZero",
  invalidUnit: "errorInvalidUnit",
  invalidInputFormat:"errorInvalidInputFormat",
  temperatureMinValue: "errorTemperatureMinValue",
  temperatureMaxValue: "errorTemperatureMaxValue",
  unitProvidedButSelectNotSet: "errorUnitProvidedButSelectNotSet",
  eASTMaxValue: "errorASTMaxValue",
};

const unitArrays = {
  unitHGB: ["g/dl", "mmol/l", "mg/%"] as const,
  unitWBC: ["K/μl", "10^3/μl", "tys./μl", "G/l"] as const,
  unitPLT: ["K/μl", "10^3/μl", "tys./μl", "G/l"] as const,
  unitNEUT: ["/μl", "K/μl", "10^3/μl", "tys./μl", "G/l"] as const,
  unitALT: ["U/l"] as const,
  unitAST: ["U/l"] as const,
}

const nullableNumberSchema =
  z.preprocess((value) => value === "" ? undefined : value,
      z.number({
        required_error: ERROR_MESSAGES.requiredInput,
        invalid_type_error: ERROR_MESSAGES.invalidInputFormat,
      }).min(0, { message: ERROR_MESSAGES.numberBelowZero })
    .optional()
  );

const valueSchema =
  z.preprocess((value) => value === "" ? undefined : value,
    z.number({
      required_error: ERROR_MESSAGES.requiredInput,
      invalid_type_error: ERROR_MESSAGES.invalidInputFormat,
    }).min(0, { message: ERROR_MESSAGES.numberBelowZero })
  );

const createUnitSchema = <T extends readonly [string, ...string[]]>(unitArray: T) =>
  z.enum(unitArray, {
    required_error: ERROR_MESSAGES.requiredSelection,
    invalid_type_error: ERROR_MESSAGES.invalidUnit,
  });


export const temperatureSchema =
  z.preprocess((value) => value === "" ? undefined : value,
    z.number({
      required_error: ERROR_MESSAGES.requiredInput,
      invalid_type_error: ERROR_MESSAGES.invalidInputFormat,
    })
    .min(34, { message: ERROR_MESSAGES.temperatureMinValue })
    .max(42, { message: ERROR_MESSAGES.temperatureMaxValue })
  );

export const HGBschema = z
  .object({
    value: valueSchema,
    unit: createUnitSchema(unitArrays.unitHGB),
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
    unit: createUnitSchema(unitArrays.unitWBC),
  })
  .refine((data) => !(data.value > 9999), {
    message: "errorWBCMaxValue",
    path: ["value"],
  });

export const PLTschema = z
  .object({
    value: valueSchema,
    unit: createUnitSchema(unitArrays.unitPLT),
  })
  .refine((data) => !(data.value > 900), {
    message: "errorPLTMaxValue",
    path: ["value"],
  });

export const NEUTschema = z
  .object({
    value: valueSchema,
    unit: createUnitSchema(unitArrays.unitNEUT),
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
    unit: createUnitSchema(unitArrays.unitALT).optional(),
  })
  .refine((data) => !(data.value && data.value > 9999), {
    message: "errorALTMaxValue",
    path: ["value"],
  })
  .refine((data) => !(data.value && data.unit === undefined), {
    message: ERROR_MESSAGES.requiredSelection,
    path: ["unit"],
  });

export const ASTschema = z
  .object({
    value: nullableNumberSchema,
    unit: createUnitSchema(unitArrays.unitAST).optional(),
  })
  .refine((data) => !(data.value && data.value > 9999), {
    message: ERROR_MESSAGES.eASTMaxValue,
    path: ["value"],
  })
  .refine((data) => !(data.value && data.unit === undefined), {
    message: ERROR_MESSAGES.requiredSelection,
    path: ["unit"],
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
