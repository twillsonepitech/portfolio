import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        education: 'Education',
        hackathons: 'Hackathons',
        experience: 'Experience',
        contact: 'Contact'
      },
      hero: {
        greeting: 'Hi, I\'m Thomas',
        role: 'Full Stack Developer',
        description: 'I build exceptional digital experiences with a focus on security and innovation.'
      },
      education: {
        title: 'Education',
        ongoing: 'Ongoing',
        completed: 'Completed'
      },
      hackathons: {
        title: 'Hackathons'
      },
      experience: {
        title: 'Professional Experience'
      },
      contact: {
        title: 'Get In Touch',
        message: 'Interested in working together or have a question?',
        button: 'Send Message'
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        education: 'Formation',
        hackathons: 'Hackathons',
        experience: 'Expérience',
        contact: 'Contact'
      },
      hero: {
        greeting: 'Bonjour, je suis Thomas',
        role: 'Développeur Full Stack',
        description: 'Je crée des expériences numériques exceptionnelles avec un accent sur la sécurité et l\'innovation.'
      },
      education: {
        title: 'Formation',
        ongoing: 'En cours',
        completed: 'Terminé'
      },
      hackathons: {
        title: 'Hackathons'
      },
      experience: {
        title: 'Expérience Professionnelle'
      },
      contact: {
        title: 'Contact',
        message: 'Intéressé par une collaboration ou vous avez une question ?',
        button: 'Envoyer un message'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage']
    }
  });

export default i18n;