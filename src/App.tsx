import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'next-themes';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import { Github, Linkedin, Mail, GraduationCap, Trophy, Building2 } from 'lucide-react';
import { content } from './data/content';

function App() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language.startsWith('fr') ? 'fr' : 'en';
  const localizedContent = content[currentLanguage];

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />

        {/* Hero Section */}
        <section id="home" className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                <span className="text-indigo-600 dark:text-indigo-400">{t('hero.greeting')}</span>
                <br />
                {t('hero.role')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                {t('hero.description')}
              </p>
              <div className="flex justify-center space-x-6">
                <a href="https://github.com/twillsonepitech" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/thomas-willson-5a8b31207/" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:thomas.willson@epitech.eu" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
              <GraduationCap className="w-8 h-8 mr-2" />
              {t('education.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {localizedContent.diplomas.map((diploma, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg"
                >
                  <img src={diploma.image} alt={diploma.school} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{diploma.school}</h3>
                    <p className="text-indigo-600 dark:text-indigo-400 mb-2">{diploma.degree}</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {diploma.period} - <span className="font-semibold">{diploma.status}</span>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{diploma.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {diploma.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-[5px] text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Hackathons Section */}
        <section id="hackathons" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
              <Trophy className="w-8 h-8 mr-2" />
              {t('hackathons.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {localizedContent.hackathons.map((hackathon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{hackathon.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{hackathon.date}</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-[5px] text-sm">
                      {hackathon.achievement}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{hackathon.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {hackathon.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-[5px] text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
              <Building2 className="w-8 h-8 mr-2" />
              {t('experience.title')}
            </h2>
            <div className="space-y-8">
              {localizedContent.experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                  <a href={exp.href} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 mb-2 hover:underline cursor-pointer">
                    {exp.company}
                  </a>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.period}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-[5px] text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">{t('contact.title')}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">{t('contact.message')}</p>
            <a
              href="mailto:thomas.willson@epitech.eu"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-lg transition-colors"
            >
              {t('contact.button')}
              <Mail className="ml-2 w-4 h-4" />
            </a>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
