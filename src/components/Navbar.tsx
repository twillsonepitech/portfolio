import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { Code2 } from 'lucide-react';

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Code2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {['home', 'education', 'hackathons', 'experience', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {t(`nav.${item}`)}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
