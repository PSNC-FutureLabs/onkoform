import { z } from "zod";
import {
	ALTschema,
	ASTschema,
	dateSchema,
	dropdownSchema,
	ERROR_MESSAGES,
	HGBschema,
	NEUTschema,
	PLTschema,
	temperatureSchema,
	WBCschema,
} from "./schema-utils";

export const schema = z.object({
	birthday: dateSchema,
	gender: z.string({ required_error: ERROR_MESSAGES.required }),
	disease: dropdownSchema,
	hospitalWard: dropdownSchema,
	temperature: temperatureSchema,
	"measurement-place": z.string({ required_error: ERROR_MESSAGES.required }),
	symptoms: z.string().array().optional(),
	otherSymptoms: z.string().optional(),
	"examination-date": dateSchema,
	HGB: HGBschema,
	WBC: WBCschema,
	PLT: PLTschema,
	ALT: ALTschema,
	AST: ASTschema,
	NEUT: NEUTschema,
	"examination-date2": dateSchema,
	HGBprev: HGBschema,
	WBCprev: WBCschema,
	PLTprev: PLTschema,
	ALTprev: ALTschema,
	ASTprev: ASTschema,
	NEUTprev: NEUTschema,
});

export type FormFields = z.infer<typeof schema>;
