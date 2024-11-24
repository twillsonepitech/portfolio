import { Content } from '../types';

export const content: Content = {
  en: {
    diplomas: [
      {
        school: 'EPITECH',
        degree: 'Master in Information Technology and Software Engineering',
        period: '2020 - 2025',
        status: 'Ongoing',
        description: '5-year program in digital technology expertise',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000',
        tags: ['Programming', 'DevOps', 'Architecture', 'Innovation']
      },
      {
        school: 'Universiti Kuala Lumpur - Malaysian Institute of Information Technology',
        degree: 'Diploma of Engineering Technology (Computer & Networking)',
        period: '2023 - 2024',
        status: 'Completed',
        description: 'Specialization in networking and programming',
        image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=1000',
        tags: ['Network', 'Programming', 'DevOps', 'Data Engineering']
      }
    ],
    hackathons: [
      {
        name: 'EPITECH x Bouygues Telecom Hackathon',
        date: 'February 2022 - June 2022',
        description: 'Implemented APIs set up by Bouygues Telecom. Python WhatsApp bot allowing communication with these APIs. Use of Twilio to simulate the WhatsApp bot.',
        achievement: '1st place',
        tags: ['API', 'Python', 'Twilio']
      },
      {
        name: 'EPITECH x StartOn Hackathon',
        date: 'May 06, 2022 - May 08, 2022',
        description: 'Move from Web2.0 to Web3.0 by proposing a project. Use of Blockchain, Solidity language. Deployment of a Smart contract (by myself).',
        achievement: 'Finalist',
        tags: ['Web3.0', 'Solidity', 'Blockchain', 'Smart Contract']
      }
    ],
    experiences: [
      {
        company: 'Smice, Reinvented Mystery Shopping',
        href: 'https://smice.com/',
        role: 'Junior Developer',
        period: 'July 2021 - December 2021',
        tags: ['PHP', 'SQL', 'Laravel', 'JSON', 'HTML / CSS / JS / jQuery', 'Angular'],
        description: "I joined in a context of website improvement. I added many new features and data displays. This involved backend changes, which I had to retrieve via SQL queries on the frontend to display and design them.",
      },
      {
        company: 'Innovative Findings',
        href: '',
        role: 'Low-Level Developer',
        period: 'July 2022 - July 2023',
        tags: ['C', 'C++', 'Cryptography', 'Algorithms', 'Bash Shell Scripting', 'Data Structures'],
        description: "I joined the company and helped it grow. For this experience, my mentors recommended me to the company head, who appreciated my level, even though I still had much to learn. The project is based on mathematics and cryptography.",
      },
      {
        company: 'JungleBike',
        href: 'https://www.shop.junglebike.fr/',
        role: 'Full Stack Developer (Freelance)',
        period: 'August 2023 - October 2023',
        tags: ['PHP', 'SQL', 'WordPress', 'Prestashop', 'API', 'Woocommerce', 'Shopify', 'XML/JSON', 'HTML / CSS / JS / jQuery'],
        description: "For a freelance mission, I had to integrate Shopify, WooCommerce, and PrestaShop APIs to retrieve user items and store them in a database. Code optimization took the most time as I was retrieving data in two different formats, JSON and XML.",
      },
      {
        company: '6ixtes',
        href: 'https://6ixtes.com/',
        role: 'Full Stack Developer (Freelance)',
        period: 'June 2024 - October 2024',
        tags: ['PHP', 'SQL', 'JQuery', 'Docker', 'HTML / CSS / JS / jQuery'],
        description: "For a freelance mission, I had to add new features to their CRM. The next step for them is to start over with a new site using new technologies, and they trust us enough for that, so the freelance work will continue with the creation of a new CRM using Node.js (express), Next.js, Prisma, SQL, etc.",
      },
      {
        company: 'Partech Partners',
        href: 'https://partechpartners.com/',
        role: 'Full Stack Developer, UI/UX Designer (Freelance)',
        period: 'June 2024 - Ongoing',
        tags: ['TypeScript', 'Node', 'ReactJS', 'Docker', 'CRM', 'PostgreSQL', 'Kubernetes', 'Kafka', 'Scraping', 'Express', 'Vite', 'Vitest'],
        description: "Along with the 6ixtes freelance work, this is my main freelance project. My initial goal was to create an admin panel and add new features to their EDM. Currently, I'm creating a tool to generate website profiles using data scraping and OpenAI, as a full-stack solution.",
      },
      {
        company: 'Niiity',
        href: '',
        role: 'Full Stack Developer (Freelance)',
        period: 'September 2024 - Ongoing',
        tags: ['Docker', 'React Native', 'Prisma', 'PostgreSQL', 'ReactJS', 'Nestjs', 'TypeScript', 'ANT Design', 'Figma'],
        description: "A UI/UX Designer contacted me to create their mobile platform for event listings in France called Niiity. Users will be able to register and view events around them, while the admin can access a website to add events, manage users, and handle everything through an admin panel.",
      }
    ]
  },
  fr: {
    diplomas: [
      {
        school: 'EPITECH',
        degree: 'Master Expert en Technologies de l\'Information et Ingénierie Logicielle',
        period: '2020 - 2025',
        status: 'En cours',
        description: 'Formation d\'expert en technologies numériques sur 5 ans',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000',
        tags: ['Programmation', 'DevOps', 'Architecture', 'Innovation']
      },
      {
        school: 'Universiti Kuala Lumpur - Malaysian Institute of Information Technology',
        degree: 'Diplôme de Technologie en Ingénierie (Informatique & Réseaux)',
        period: '2023 - 2024',
        status: 'Terminé',
        description: 'Spécialisation en réseau et programmation',
        image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=1000',
        tags: ['Réseau', 'Programmation', 'DevOps', 'Ingénierie des données']
      }
    ],
    hackathons: [
      {
        name: 'Hackathon EPITECH x Bouygues Telecom',
        date: 'Février 2022 - Juin 2022',
        description: 'Implémentation des APIs mises en place par Bouygues Telecom. Bot WhatsApp Python permettant la communication avec ces APIs. Utilisation de Twilio pour simuler le bot WhatsApp.',
        achievement: '1ère place',
        tags: ['API', 'Python', 'Twilio']
      },
      {
        name: 'Hackathon EPITECH x StartOn',
        date: '06 Mai 2022 - 08 Mai 2022',
        description: 'Passage du Web2.0 au Web3.0 en proposant un projet. Utilisation de la Blockchain, langage Solidity. Déploiement d\'un Smart contract (par moi-même).',
        achievement: 'Finaliste',
        tags: ['Web3.0', 'Solidity', 'Blockchain', 'Smart Contract']
      }
    ],
    experiences: [
      {
        company: 'Smice, le Mystery Shopping réinventé',
        href: 'https://smice.com/',
        role: 'Junior Développeur',
        period: 'Juillet 2021 - Décembre 2021',
        tags: ['PHP', 'SQL', 'Laravel', 'JSON', 'HTML / CSS / JS / jQuery', 'Angular'],
        description: "Je suis arrivé dans un contexte d'amélioration du site web. J'ajoutais beaucoup de nouvelles fonctionnalités, de nouvelles données à afficher. Tout cela en passant par un changement dans le Backend, que je devais récupérer via des requêtes SQL côté Frontend afin de les afficher et de les designer.",
      },
      {
        company: 'Innovative Findings',
        href: '',
        role: 'Développeur Bas-Niveau',
        period: 'Juillet 2022 - Juillet 2023',
        tags: ['C', 'C++', 'Cryptographie', 'Algorithmes', 'Bash Shell Scripting', 'Data Structures'],
        description: "Je suis arrivé dans l'entreprise et l'ai aidé à se développer. Pour cette expérience, mes mentors m'ont conseillé au chef de l'entreprise, qui a apprécié mon niveau, même si j'avais encore beaucoup à apprendre. Le projet se base sur des mathématiques et de la cryptographie.",
      },
      {
        company: 'JungleBike',
        href: 'https://www.shop.junglebike.fr/',
        role: 'Développeur FullStack (Freelance)',
        period: 'Août 2023 - Octobre 2023',
        tags: ['PHP', 'SQL', 'WordPress', 'Prestashop', 'API', 'Woocommerce', 'Shopify', 'XML/JSON', 'HTML / CSS / JS / jQuery'],
        description: "Pour une mission freelance, je devais intégrer l'API de Shopify, WooCommerce et PrestaShop afin de récupérer les articles d'un utilisateur et de les stocker en base de données. L'optimisation du code est ce qui m'a pris le plus de temps, car je récupérais des données dans deux différents format, le JSON et le xml.",
      },
      {
        company: '6ixtes',
        href: 'https://6ixtes.com/',
        role: 'Développeur Fullstack (Freelance)',
        period: 'Juin 2024 - Octobre 2024',
        tags: ['PHP', 'SQL', 'JQuery', 'Docker', 'HTML / CSS / JS / jQuery'],
        description: "Pour une mission de freelance, je devais ajouter de nouvelles fonctionnalités à leur CRM. La suite pour eux est de repartir sur un nouveau site avec de nouvelles technologies et ils nous font assez confiance pour cela, donc la freelance continuera avec la création d'un nouveau CRM avec du Nodejs (express), Nextjs, Prisma, SQL, etc.",
      },
      {
        company: 'Partech Partners',
        href: 'https://partechpartners.com/',
        role: 'Développeur Fullstack, UI/UX Designer (Freelance)',
        period: 'Juin 2024 - En cours',
        tags: ['TypeScript', 'Node', 'ReactJS', 'Docker', 'CRM', 'PostgreSQL', 'Kubernetes', 'Kafka', 'Scraping', 'Express', 'Vite', 'Vitest'],
        description: "En même temps que la freelance avec 6ixtes, celle-ci est la freelance principale que je fais. Mon objectif au début, était de créer un panel administratif, ajouter de nouvelles fonctionnalités sur leur EDM. Actuellement je créé un outil pour pouvoir générer un profil d'un site web avec du scraping de données, utilisation d'OpenAI, en Fullstack.",
      },
      {
        company: 'Niiity',
        href: '',
        role: 'Développeur Fullstack (Freelance)',
        period: 'Septembre 2024 - En cours',
        tags: ['Docker', 'React Native', 'Prisma', 'PostgreSQL', 'ReactJS', 'Nestjs', 'TypeScript', 'ANT Design', 'Figma'],
        description: "Un UI/UX Designer m'a contacté pour lui créer sa plateforme mobile de répertoire d'événements en France du nom de Niiity. Les utilisateurs pourront s'inscrire et visualiser les événements autour d'eux, l'admin pourra aussi accéder à un site web lui permettant d'ajouter des événements, des utilisateurs, gérer globalement tous, depuis un panel admin.",
      }
    ]
  }
};