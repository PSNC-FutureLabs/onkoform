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
} from "./schemas";

export const schema = z.object({
	dateOfBirth: dateSchema,
	gender: z.string({ required_error: ERROR_MESSAGES.required }),
	medicalCondition: dropdownSchema,
	hospitalWard: dropdownSchema,
	temperature: temperatureSchema,
	"measurement-place": z.string().optional(),
	symptoms: z.string().array().optional(),
	"headache-rating": z.string().nullable(),
	"pain-anxiety-rating": z.string().nullable(),
	"mucosal-toxicities-rating": z.string().nullable(),
	otherSymptoms: z.string().optional(),
	"actual-lab-test-date": dateSchema,
	HGB: HGBschema,
	WBC: WBCschema,
	PLT: PLTschema,
	ALT: ALTschema,
	AST: ASTschema,
	NEUT: NEUTschema,
	"previous-lab-test-date": dateSchema,
	HGBprev: HGBschema,
	WBCprev: WBCschema,
	PLTprev: PLTschema,
	ALTprev: ALTschema,
	ASTprev: ASTschema,
	NEUTprev: NEUTschema,
});

export type FormFields = z.infer<typeof schema>;
