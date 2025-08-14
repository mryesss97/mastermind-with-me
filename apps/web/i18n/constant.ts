export enum LanguageCode {
  EN = "en",
  VI = "vi"
}

export type Language = {
  code: LanguageCode;
  name: string;
};

export const LANGUAGE_SUPPORTED: Language[] = [
  {
    code: LanguageCode.EN,
    name: "English"
  },
  {
    code: LanguageCode.VI,
    name: "Tiếng Việt"
  }
];