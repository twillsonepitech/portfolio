import { useTranslation } from 'react-i18next';

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  return (
    <button
      onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}
      className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
    >
      {i18n.language === 'en' ? 'FR' : 'EN'}
    </button>
  );
}