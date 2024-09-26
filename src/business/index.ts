import { FormFields } from "./form-schema";
import { DropdownOptionsType, MultiCheckboxOptionsType, RadioOptionsType, UnitType } from "./types";

export const versionTag = {
	majorNo: 0,
	minorNo: 7,
	patchNo: 30,
	status: "alpha",
	date: "2024.09.26",
};

export const versionText = (): string =>
	`wersja ${versionTag.majorNo}.${versionTag.minorNo}.${versionTag.patchNo}-${versionTag.status} (${versionTag.date})`;

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
		fields: ["temperature", "symptoms"],
	},
	{
		id: 3,
		name: "Aktualne badania",
		fields: [
			"actual-lab-test-date",
			["HGB.value", "HGB.unit"],
			["WBC.value", "WBC.unit"],
			["PLT.value", "PLT.unit"],
			["NEUT.value", "NEUT.unit"],
			"ALT",
			"AST",
		],
	},
	{
		id: 4,
		name: "Poprzednie badania",
		fields: [
			"previous-lab-test-date",
			["HGBprev.value", "Hgbprev.unit"],
			["WBCprev.value", "WBCprev.unit"],
			["PLTprev.value", "PLTprev.unit"],
			["NEUTprev.value", "NEUTprev.unit"],
			"ALTprev",
			"ASTprev",
		],
	},
	{
		id: 5,
		name: "Wyniki",
		fields: [],
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
export const HGBUnits: UnitType[] = ["g/dl", "mg/%"];
export const WBCUnits: UnitType[] = ["K/μl", "10^3/μl", "tys./μl"];
export const PLTUnits: UnitType[] = ["K/μl", "10^3/μl", "tys./μl"];
export const NEUTUnits: UnitType[] = ["/μl", "K/μl", "10^3/μl", "tys./μl"];
export const ALTUnits: UnitType[] = ["U/l"];
export const ASTUnits: UnitType[] = ["U/l"];

export const formDefaultValues: Partial<FormFields> = {
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
	WBC: {
		value: 0,
		unit: "K/μl",
	},
	PLT: {
		value: 0,
		unit: "K/μl",
	},
	NEUT: {
		value: 0,
		unit: "K/μl",
	},
	ALT: { value: null, unit: "U/l" },
	AST: { value: null, unit: "U/l" },
	HGBprev: {
		value: 0,
		unit: "g/dl",
	},
	WBCprev: {
		value: 0,
		unit: "K/μl",
	},
	PLTprev: {
		value: 0,
		unit: "K/μl",
	},
	NEUTprev: {
		value: 0,
		unit: "K/μl",
	},
	ALTprev: { value: null, unit: "U/l" },
	ASTprev: { value: null, unit: "U/l" },
};

export const formTestValues: Partial<FormFields> = {
	gender: "male",
	medicalCondition: "all",
	hospitalWard: "o3",
	temperature: 36.6,
	symptoms: [],
	"headache-rating": "",
	"pain-anxiety-rating": "",
	"mucosal-toxicities-rating": "",
	HGB: {
		value: 10.9,
		unit: "g/dl",
	},
	WBC: {
		value: 1.9,
		unit: "K/μl",
	},
	PLT: {
		value: 306,
		unit: "K/μl",
	},
	NEUT: {
		value: 0.26,
		unit: "K/μl",
	},
	ALT: { value: null, unit: "U/l" },
	AST: { value: null, unit: "U/l" },
	HGBprev: {
		value: 11.6,
		unit: "g/dl",
	},
	WBCprev: {
		value: 1.1,
		unit: "K/μl",
	},
	PLTprev: {
		value: 68,
		unit: "K/μl",
	},
	NEUTprev: {
		value: 0.31,
		unit: "K/μl",
	},
	ALTprev: { value: null, unit: "U/l" },
	ASTprev: { value: null, unit: "U/l" },
};
