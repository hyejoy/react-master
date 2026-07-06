import { createContext } from "react";

export type Language = "ko" | "en";

export const LanguageContext = createContext<Language>("ko");
