import { atom } from 'recoil';

/**
 * Global dark mode state of app
 */
const atomDarkMode = atom<TDarkModeStatus>({
  key: 'DARK_MODE_STATE',
  default: 'auto',
});

/**
 * Current id of list
 */
const atomCurrentListId = atom<number>({
  key: 'QUIZ_LIST_ID',
  default: 0,
});

/**
 * Store all quiz data
 */
const atomAllQuiz = atom<IQuiz[]>({
  key: 'ALL_QUIZ',
  default: [],
});

export { atomAllQuiz, atomCurrentListId, atomDarkMode };
