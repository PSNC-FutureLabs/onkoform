import { FormFields } from "./form-schema";
import { DropdownOptionsType, MultiCheckboxOptionsType, RadioOptionsType, UnitType } from "./types";

export const versionTag = {
	majorNo: 0,
	minorNo: 7,
	patchNo: 4,
	status: "alpha",
	date: "2024.07.03",
};

export type StepType = {
	id: number;
	name: string;
	fields: Array<string | Array<string>>;
};

export const steps: Array<StepType> = [
	{
		id: 1,
		name: "Informacje o pacjencie",
		fields: ["dateOfBirth", "gender", "medicalCondition", "hospitalWard"],
	},
	{
		id: 2,
		name: "Niepokojące objawy",
		fields: ["temperature", "symptoms", "headache-rating", "pain-rating"],
	},
	{
		id: 3,
		name: "Aktualne badania",
		fields: [
			"examination-date",
			["HGB.value", "HGB.unit"],
			"WBC",
			"PLT",
			["NEUT.value", "NEUT.unit"],
			"ALT",
			"AST",
		],
	},
	{
		id: 4,
		name: "Poprzednie badania",
		fields: [
			"examination-date2",
			["HGB2", "Hgb2Unit"],
			"WBC2",
			"PLT2",
			["NEUT2.value", "NEUT2.unit"],
			"ALT2",
			"AST2",
		],
	},
];

export const genderOptions: RadioOptionsType[] = [
	{
		label: "kobieta",
		value: "female",
	},
	{
		label: "mężczyzna",
		value: "male",
	},
	{
		label: "inna",
		value: "other",
	},
];

export const mucosalToxicitiesLevels: RadioOptionsType[] = [
	{
		label: "Pojawienie się bólu z możliwym towarzyszącym zaczerwienieniem śluzówek",
		value: "1",
	},
	{
		label: "Silne zaczerwienienie, owrzodzenia, dziecko może przyjmować pokarmy doustne",
		value: "2",
	},
	{
		label: "Nasilone owrzodzenia z towarzyszącym obrzękiem, dziecko odmawia przyjmowania pokarmów stałych",
		value: "3",
	},
	{
		label: "Objawy są bardzo nasilone, uniemożliwiają przyjmowanie pokarmów stałych",
		value: "4",
	},
];

// to be removed if no longer needed
export const measurementPlaceOptions: RadioOptionsType[] = [
	{
		label: "czoło",
		value: "forehead",
	},
	{
		label: "pacha",
		value: "armpit",
	},
];

export const medicalConditionOptions: DropdownOptionsType[] = [
	{
		label: "ALL (ostra białaczka limfoblastyczna)",
		value: "all",
	},
	{
		label: "AML (ostra białaczka mieloblastyczna/szpikowa)",
		value: "aml",
	},
	{
		label: "CML (przewlekły nowotwór mieloproliferacyjny)",
		value: "cml",
	},
	{
		label: "Guzy germinalne",
		value: "germ-cell-tumors",
	},
	{
		label: "Chłoniak Hodgkina",
		value: "hodgkin-lymphoma",
	},
	{
		label: "Chłoniak Burkitta",
		value: "burkitt-lymphoma",
	},
	{
		label: "Inne chłoniaki",
		value: "other-lymphomas",
	},
	{
		label: "Neuroblastoma",
		value: "neuroblastoma",
	},
	{
		label: "Guz Wilmsa",
		value: "wilms-tumor",
	},
	{
		label: "Mięsaki tkanek miękkich",
		value: "soft-tissue-sarcomas",
	},
	{
		label: "Guzy OUN",
		value: "central-nervous-systems-tumors",
	},
	{
		label: "MDS (zespoły mielodysplastyczne)",
		value: "mds",
	},
	{
		label: "HLH (limfohistiocytoza hemofagocytowa)",
		value: "hlh",
	},
];

export const hospitalWardOptions: DropdownOptionsType[] = [
	{
		label: "Oddział III",
		value: "o3",
	},
	{
		label: "Oddział V",
		value: "o5",
	},
	{
		label: "Oddział TSK",
		value: "otsk",
	},
	{
		label: "Oddział Dzienny V/D",
		value: "odvd",
	},
	{
		label: "Poradnia Onkologiczna",
		value: "po",
	},
	{
		label: "Poradnia TSK",
		value: "ptsk",
	},
];

export const symptomsOptions: MultiCheckboxOptionsType[] = [
	{
		label: "dreszcze",
		value: "chills",
		description: "uczucie zimna połączone z drżeniem mięśni",
	},
	{
		label: "senność/osłabienie",
		value: "drowsiness-weakness",
		description: "zwiększona potrzeba snu/obniżenie sił fizycznych",
	},
	{
		label: "ból głowy",
		value: "headache",
		description:
			"dolegliwości bólowe, lokalizujące się w okolicy głowy - zarówno w obrębie jej skóry, jak i lokalizujący się wewnątrzczaszkowo",
	},
	{
		label: "toksyczności śluzówkowe",
		value: "mucosal-toxicities",
		description:
			"powikłania śluzówkowe chemioterapii, zmiany toksyczne śluzówek jamy ustnej, przewodu pokarmowego oraz często okolic krocza oraz odbytu; nadżerki, afty, zmiany podkrwawiające, często bolesne, wymagające podawania leków przeciwbólowych.",
	},
	{
		label: "utrzymujące się wymioty",
		value: "vomiting",
		description: "nagłe wydalenie treści żołądkowej, zazwyczaj poprzedzone nudnościami",
	},
	{
		label: "biegunka",
		value: "diarrhea",
		description:
			"oddanie 3 lub więcej luźnych/wodnistych stolców w ciągu doby lub stolec zawierający śluz, krew lub ropę",
	},
	{
		label: "krwawienie",
		value: "bleeding",
		description:
			"utrata krwi w skutek np. urazu naczynia krwionośnego, które może być szczególnie nasilone i gwałtowne w przypadku zaburzeń hematologicznych takich, jak obniżona liczna płytek krwi czy zaburzenia krzepnięcia",
	},
	{
		label: "nowe/świeże wybroczyny",
		value: "fresh-petechiae",
		description:
			"punkcikowe, czerwone zmiany, pojawiające się przy niskiej liczbie płytek krwi, świadczące o skazie krwotocznej",
	},
	{
		label: "sinica lub zasinienie ciała",
		value: "cyanosis-or-body-bruising",
		description:
			"pojawienie się niebieskawego zabarwienia skóry, a także błon śluzowych u dziecka, wiążąca się z rozpoczynającym się niedotlenieniem organizmu.",
	},
	{
		label: "nasilone obrzęki obwodowe",
		value: "severe-peripheral-edema",
		description:
			"gromadzenie nadmiaru płynu najczęściej w okolicy kostek lub, w przypadku pozycji leżącej, w okolicy lędźwiowej",
	},
	{
		label: "drgawki / brak kontaktu",
		value: "seizures-unresponsiveness",
		description:
			"mimowolne, gwałtowne skurcze mięśni u dzieci, mogące być objawem choroby neurologicznej, jak i współwystępować z podwyższoną ciepłotą ciała",
	},
	{
		label: "zaburzenia widzenia",
		value: "vision-disturbances",
		description: "zgłaszane przez dziecko pogorszenie jakości widzenia, zniekształcenie obrazu, utrata wzroku",
	},
	{
		label: "ból / niepokój",
		value: "pain-anxiety",
	},
];

export const TemperatureUnits: UnitType[] = ["°C"];
export const HGBUnits: UnitType[] = ["mg/%", "g/dl"];
export const WBCUnits: UnitType[] = ["K/μl", "tys./μl", "G/l"];
export const PLTUnits: UnitType[] = ["tys./μl", "tys./mm³"];
export const NEUTUnits: UnitType[] = ["%", "μl"];
export const ALTUnits: UnitType[] = ["U/l"];
export const ASTUnits: UnitType[] = ["U/l"];

export const defaultFromValues: Partial<FormFields> = {
	medicalCondition: "",
	hospitalWard: "",
	symptoms: [],
	"headache-rating": "",
	"pain-anxiety-rating": "",
	"mucosal-toxicities-rating": "",
	HGB: {
		value: 0,
		unit: "g/dl",
	},
	WBC: { value: 0 },
	PLT: { value: 0 },
	NEUT: {
		value: 0,
		unit: "%",
	},
	ALT: { value: 0 },
	AST: { value: 0 },
	HGBprev: {
		value: 0,
		unit: "g/dl",
	},
	WBCprev: { value: 0 },
	PLTprev: { value: 0 },
	ALTprev: { value: 0 },
	ASTprev: { value: 0 },
	NEUTprev: {
		value: 0,
		unit: "%",
	},
};
