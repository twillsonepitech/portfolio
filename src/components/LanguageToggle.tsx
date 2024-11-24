import { useTranslation } from 'react-i18next';

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('fr') ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
    // Save preference to localStorage
    localStorage.setItem('i18nextLng', newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle language"
    >
      {i18n.language.startsWith('fr') ? 'EN' : 'FR'}
    </button>
  );
}