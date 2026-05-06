import { createContext, useContext, useState } from 'react';
import ko from './ko.js';
import en from './en.js';
import ja from './ja.js';
import zh from './zh.js';

const LANGS = { ko, en, ja, zh };
export const LANG_OPTIONS = [
  { code: 'ko', label: '한' },
  { code: 'en', label: 'EN' },
  { code: 'ja', label: '日' },
  { code: 'zh', label: '中' },
];

const LangContext = createContext({ lang: 'ko', t: ko, setLang: () => {} });

export function LangProvider({ children }) {
  const [lang, setLang] = useState('ko');
  return (
    <LangContext.Provider value={{ lang, t: LANGS[lang], setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
