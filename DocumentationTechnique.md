# Documentation Technique

## 1. Introduction

Ce document détaille l'architecture technique et les choix technologiques du projet. L'application a pour objectif de recommander des événements locaux et de générer des itinéraires personnalisés en fonction des préférences des utilisateurs. Pour cela, elle exploite des données cartographiques et des événements de calendrier afin d'optimiser les propositions en fonction des disponibilités des utilisateurs.

## 2. Choix des technologies

### 2.1. Front-end

| Technologie | Performances | SEO | Éco-responsabilité | Facilité d'apprentissage |
| ----------- | ------------ | --- | ------------------ | ------------------------ |
| Next.js     | 4            | 4   | 3                  | 3                        |
| Angular     | 3            | 3   | 2                  | 2                        |
| React       | 3            | 3   | 3                  | 4                        |

#### Performances

- **Next.js** offre d'excellentes performances grâce au rendu côté serveur (SSR) et à la génération de pages statiques (SSG), ce qui réduit le temps de chargement des pages et améliore l'expérience utilisateur. Il est particulièrement adapté aux applications nécessitant un rendu rapide et une bonne réactivité.
- **Angular** propose des performances solides avec sa compilation AOT (Ahead-of-Time) et son moteur Ivy, qui optimisent le rendu et le chargement des composants. Cependant, son architecture basée sur un framework complet peut entraîner une certaine lourdeur.
- **React** bien que performant pour les applications interactives, dépend du rendu côté client par défaut. L'optimisation des performances passe souvent par l'utilisation de techniques comme le rendu côté serveur via Next.js ou d'autres solutions.

_Sources :_
_[Optimizing Server-Side Rendering in NextJS for Faster Performance](https://loadforge.com/guides/optimizing-server-side-rendering-in-nextjs-for-faster-performance)_
_[Runtime performance optimization](https://angular.dev/best-practices/runtime-performance)_
_[React.js: Server-Side Rendering vs Client-Side Rendering](https://flatirons.com/blog/react-js-server-side-rendering-vs-client-side-rendering/)_

#### SEO

- **Next.js** est particulièrement performant en matière de référencement naturel (SEO) grâce à son rendu côté serveur et à la génération de pages statiques, permettant aux moteurs de recherche d'indexer facilement le contenu.
- **Angular** peut poser des défis en SEO car il s'agit d'un framework monopage (SPA) où le contenu est souvent rendu côté client. Toutefois, des solutions comme Angular Universal permettent d'améliorer cet aspect.
- **React** comme Angular, n'est pas optimisé nativement pour le SEO. L'utilisation de frameworks complémentaires comme Next.js peut améliorer la situation.

_Sources :_
_[Optimizing Next.js for SEO](https://dev.to/lexyerresta/optimizing-nextjs-for-seo-1pn2)_
_[Mastering SEO with Angular V18](https://dev.to/aswinthgt/mastering-seo-with-angular-v18-5166)_
_[React SEO: Best Practices, Components, Optimization Tips](https://maybe.works/blogs/react-seo)_

#### Éco-responsabilité

- **Next.js** a une consommation énergétique modérée grâce à l'optimisation des rendus et la gestion des requêtes serveur, mais reste dépendant de l'infrastructure d'hébergement utilisée.
- **Angular** est plus lourd en ressources en raison de sa complexité et de son approche basée sur un framework complet, ce qui peut entraîner une consommation énergétique plus importante.
- **React** offre une consommation énergétique relativement équilibrée, avec une gestion optimisée du DOM virtuel, bien que les applications entièrement client-side puissent être plus énergivores.

_Sources :_
_[Performance et Éco-conception Next.js : Guide 2025](https://www.devethique.fr/blog/empreinte-carbone)_
_[Optimizing Single Page Applications (SPA) Through Angular Framework Innovations](https://ijrmeet.org/wp-content/uploads/2024/12/GC240202-AP04_Optimizing-Single-Page-Applications-SPA-Through-Angular-Framework-Innovations-516-532.pdf)_
_[Optimizing Your React App’s Performance](https://supertokens.com/blog/5-tips-for-optimizing-your-react-apps-performance)_

#### Facilité d’apprentissage

- **Next.js** repose sur React, ce qui le rend accessible aux développeurs familiarisés avec ce dernier. Son intégration d’outils avancés comme le SSR et le SSG peut nécessiter un certain temps d’apprentissage.
- **Angular** a une courbe d’apprentissage plus abrupte en raison de sa structure basée sur TypeScript, ses concepts avancés (injecteurs de dépendances, modules, etc.) et son écosystème plus rigide.
- **React** est souvent considéré comme plus simple à apprendre grâce à sa flexibilité et à son approche modulaire, bien qu’il nécessite d’être complété par d’autres bibliothèques pour certaines fonctionnalités avancées.

_Sources :_
_[Next.js documentation](https://nextjs.org/docs)_
_[Angular overview](https://angular.dev/overview)_
_[React.js documentation](https://react.dev/learn)_

#### Conclusion du choix du front-end

Après une analyse des différentes technologies, Next.js a été retenu comme framework front-end principal. Son excellent compromis entre performances, SEO, éco-responsabilité et facilité d'apprentissage en fait une solution idéale pour notre application, garantissant une expérience utilisateur fluide et optimisée.

### 2.2. Back-end

| Technologie       | Performances | Scalabilité | Éco-responsabilité | Communauté |
| ----------------- | ------------ | ----------- | ------------------ | ---------- |
| Node.js + Express | 4            | 4           | 3                  | 4          |
| Django            | 3            | 3           | 2                  | 3          |
| NestJS            | 4            | 4           | 3                  | 3          |

#### Performances

- **Node.js + Express** offre de très bonnes performances grâce à son modèle non-bloquant et asynchrone, ce qui le rend particulièrement adapté aux applications nécessitant un grand nombre de connexions simultanées.
- **Django** est performant pour les applications nécessitant des opérations complexes côté serveur, bien qu’il soit généralement moins rapide que Node.js en raison de son architecture synchrone par défaut.
- **NestJS** basé sur Node.js, bénéficie des mêmes avantages en termes de performances tout en ajoutant une structure plus organisée et modulaire.

_Sources :_
_[Enhancing Node.js and Express.js Application Performance and Reliability](https://medium.com/@vishal.mishra84/enhancing-node-js-and-express-js-application-performance-and-reliability-a6c4a7f1141d)_
_[The Ultimate Guide to Django Performance](https://loadforge.com/guides/the-ultimate-guide-to-django-performance-best-practices-for-scaling-and-optimization)_
_[Nestjs vs Nodejs: A Technical Comparison](https://www.restack.io/p/nestjs-vs-nodejs-comparison)_

#### Scalabilité

- **Node.js + Express** est hautement scalable grâce à son modèle asynchrone et sa compatibilité avec des architectures serverless ou microservices.
- **Django** supporte bien la montée en charge, notamment avec une bonne gestion de la base de données et des optimisations via des outils comme Redis ou Celery.
- **NestJS** grâce à sa structure modulaire, facilite l’implémentation de microservices et l’adaptation aux besoins croissants d’une application.

_Sources :_
_[Scaling Node.js Applications](https://dev.to/imsushant12/scaling-nodejs-applications-techniques-and-best-practices-3lc0)_
_[Scaling Django to Handle High Traffic](https://proxiesapi.com/articles/scaling-django-to-handle-high-traffic)_
_[Building Scalable Microservices with NestJS and Kafka](https://dev.to/tkssharma/building-scalable-microservices-with-nestjs-and-kafka-4mm0)_

#### Éco-responsabilité

- **Node.js + Express** a une consommation énergétique modérée, principalement grâce à son architecture asynchrone qui optimise l’utilisation des ressources serveur.
- **Django** consomme davantage en raison de son exécution synchrone, bien que certaines optimisations puissent réduire son empreinte carbone.
- **NestJS** partage les mêmes avantages que Node.js en matière d’efficacité énergétique, tout en structurant mieux les projets pour éviter la surcharge de ressources.

_Sources :_
_[Production best practices: performance and reliability](https://expressjs.com/fr/advanced/best-practice-performance.html)_
_[The Ultimate Guide to Django Performance](https://loadforge.com/guides/the-ultimate-guide-to-django-performance-best-practices-for-scaling-and-optimization)_
_[Building Scalable Microservices with NestJS and Kafka](https://dev.to/tkssharma/building-scalable-microservices-with-nestjs-and-kafka-4mm0)_

#### Communauté

- **Node.js + Express** dispose d’une large communauté avec un vaste écosystème de bibliothèques et de ressources.
- **Django** bénéficie d’une communauté active et d’une documentation très complète, bien que moins étendue que celle de Node.js.
- **NestJS** plus récent, voit sa communauté grandir rapidement, bénéficiant à la fois de la popularité de Node.js et de son approche modulaire.

_Sources :_
_[Introduction à Express/Node](https://developer.mozilla.org/fr/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction)_
_[Django introduction](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Django/Introduction)_
_[NestJS: un framework Node.js complet ?](https://dev.to/sfeircode/nestjs-un-framework-nodejs-complet--428)_

#### Conclusion du choix du back-end

Après comparaison des différentes technologies, Node.js avec Express a été retenu comme solution back-end. Son modèle asynchrone performant, sa scalabilité optimale et son vaste écosystème en font un choix adapté aux besoins de l'application, garantissant une gestion efficace des requêtes et une bonne flexibilité pour l'évolution du projet.

### 2.3. Base de données

| Technologie                | Performances | Scalabilité | Éco-responsabilité | Communauté |
| -------------------------- | ------------ | ----------- | ------------------ | ---------- |
| Firebase Realtime Database | 4            | 3           | 3                  | 3          |
| PostgreSQL                 | 4            | 4           | 3                  | 4          |
| MongoDB                    | 4            | 4           | 3                  | 3          |

#### Performances

- **Firebase Realtime Database** offre une excellente rapidité pour les applications nécessitant des mises à jour en temps réel, mais peut être limité pour les requêtes complexes.
- **PostgreSQL** est performant pour les requêtes complexes et les grandes bases de données relationnelles, mais peut nécessiter plus d’optimisation pour gérer des millions de connexions simultanées.
- **MongoDB** est optimisé pour les applications nécessitant une flexibilité des données et une grande vitesse d’écriture, bien qu'il puisse être moins efficace pour certaines requêtes relationnelles.

_Sources :_
_[Optimize Database Performance](https://firebase.google.com/docs/database/usage/optimize)_
_[Comparing MongoDB vs PostgreSQL](https://www.mongodb.com/resources/compare/mongodb-postgresql)_
_[Postgres vs. MongoDB](https://www.bytebase.com/blog/postgres-vs-mongodb/)_

#### Scalabilité

- **Firebase Realtime Database** est conçu pour évoluer rapidement avec des solutions cloud-native, mais peut présenter des limites avec des datasets volumineux nécessitant des relations complexes.
- **PostgreSQL** est scalable horizontalement et verticalement, notamment avec des solutions comme Citus, permettant de gérer de très grands volumes de données.
- **MongoDB** facilite la scalabilité horizontale grâce à son architecture en sharding, idéale pour les bases de données massives.

_Sources :_
_[Scale with Multiple Databases](https://firebase.google.com/docs/database/usage/sharding)_
_[MongoDB vs. PostgreSQL](https://airbyte.com/data-engineering-resources/mongodb-vs-postgresql)_
_[Comparing MongoDB vs PostgreSQL](https://www.mongodb.com/resources/compare/mongodb-postgresql)_

#### Éco-responsabilité

- **Firebase Realtime Database** repose sur Google Cloud, qui s'engage à utiliser des énergies renouvelables, bien que les accès fréquents puissent accroître la consommation énergétique.
- **PostgreSQL** en fonction de son hébergement, peut être optimisé pour une meilleure efficacité énergétique avec des configurations adaptées.
- **MongoDB** lorsqu'il est auto-hébergé, permet d'optimiser la gestion des ressources pour réduire l'empreinte carbone.

_Sources :_
_[Google Firebase and Sustainability](https://www.komunique.com/blog/google-firebase-and-sustainability-a-developers-perspective)_
_[Postgres vs. MongoDB](https://www.bytebase.com/blog/postgres-vs-mongodb/)_
_[MongoDB Atlas: le guide complet sur le service managé](https://welovedevs.com/fr/articles/mongodb-atlas/)_

#### Communauté

- **Firebase Realtime Database** bénéficie d’une large adoption pour les applications mobiles et web, mais ses solutions propriétaires limitent parfois la flexibilité.
- **PostgreSQL** dispose d’une communauté active et d’un riche écosystème d’extensions open-source.
- **MongoDB** est soutenu par une large communauté de développeurs, en particulier pour les applications modernes nécessitant une base NoSQL flexible.

_Sources :_
_[Firebase community](https://firebase.google.com/community)_
_[Postgres community](https://www.postgresql.org/community/)_
_[MongoDB community](https://www.mongodb.com/try/download/community)_

#### Conclusion du choix de la base de données

Après analyse des différentes options, Firebase Realtime Database a été retenu pour sa performance en temps réel et son intégration native avec les services cloud. Son architecture permet une gestion fluide des mises à jour et simplifie le développement de l’application.

### 2.4. Hébergement

| Technologie      | Performances | Scalabilité | Éco-responsabilité | Communauté |
| ---------------- | ------------ | ----------- | ------------------ | ---------- |
| Vercel           | 4            | 4           | 3                  | 4          |
| Netlify          | 4            | 3           | 3                  | 3          |
| Firebase Hosting | 3            | 3           | 3                  | 3          |

#### Performances

- **Vercel** offre un excellent temps de réponse avec son réseau de distribution (CDN) optimisé et ses déploiements rapides.
- **Netlify** propose une performance similaire avec un bon support des sites statiques, mais peut être légèrement moins optimisé pour les applications Next.js.
- **Firebase Hosting** est très performant pour les applications front-end avec intégration aux services Firebase, mais peut être limité pour des applications nécessitant un back-end complexe.

_Sources :_
_[Improved CDN Performance](https://vercel.com/changelog/improved-cdn-performance)_
_[Designed to deliver the fastest speeds possible](https://www.netlify.com/platform/core/high-performance-edge/)_
_[Firebase Hosting](https://firebase.google.com/docs/hosting)_

#### Scalabilité

- **Vercel** est conçu pour gérer une forte montée en charge grâce à son infrastructure serverless et son CDN performant.
- **Netlify** est également scalable mais peut nécessiter plus de configurations pour des projets de grande ampleur.
- **Firebase Hosting** est optimisé pour le scaling des projets Firebase mais moins flexible pour des architectures complexes.

_Sources :_
_[Behind the scenes of Vercel's infrastructure](https://vercel.com/blog/behind-the-scenes-of-vercels-infrastructure)_
_[Application scalability](https://answers.netlify.com/t/application-scalability/101382)_
_[Learn about usage levels, quotas, and pricing for Hosting](https://firebase.google.com/docs/hosting/usage-quotas-pricing)_

#### Éco-responsabilité

- **Vercel** s'engage à utiliser des solutions éco-responsables pour réduire l'empreinte carbone de ses déploiements.
- **Netlify** optimise son infrastructure pour réduire la consommation d’énergie, avec un focus sur les architectures statiques
- **Firebase Hosting**, dépendant de Google Cloud, bénéficie des engagements écologiques de Google.

_Sources :_
_[Netlify and Sustainability](https://www.netlify.com/sustainability/)_
_[Vercel's Green Energy Policy](https://vercel.com/guides/what-is-vercel-green-energy-policy)_
_[Google Firebase and Sustainability](https://www.komunique.com/blog/google-firebase-and-sustainability-a-developers-perspective)_

#### Communauté

- **Vercel** s'engage à utiliser des solutions éco-responsables pour réduire l'empreinte carbone de ses déploiements.
- **Netlify** optimise son infrastructure pour réduire la consommation d’énergie, avec un focus sur les architectures statiques
- **Firebase Hosting**, dépendant de Google Cloud, bénéficie des engagements écologiques de Google.

_Sources :_
_[Vercel community](https://vercel.community/)_
_[Netlify community](https://answers.netlify.com/)_
_[Firebase community](https://firebase.google.com/community)_

#### Conclusion du choix de l'hébergement

Pour l’hébergement, Vercel a été retenu en raison de son intégration optimisée avec Next.js, de ses performances élevées et de sa scalabilité, garantissant un déploiement fluide et efficace de l’application.

## 3. Justification PWA vs application native

Les Progressive Web Apps (PWA) et les applications natives présentent chacune des avantages distincts en fonction des besoins du projet.

| Critères                | PWA | Application Native |
| ---------------------- | --- | ------------------ |
| Performance            | 3   | 4                  |
| Éco-responsabilité     | 4   | 2                  |
| Temps de développement | 4   | 2                  |
| Maintenance            | 4   | 2                  |


#### Performance

- **Les applications natives** offrent de meilleures performances grâce à un accès direct aux ressources matérielles, notamment pour des applications nécessitant des graphismes avancés ou des calculs intensifs.
- **Les PWA** sont légèrement en retrait sur ce point, car elles reposent sur des technologies web exécutées via un navigateur, ce qui peut introduire des latences.

#### Éco-responsabilité

- **Les PWA** ont un impact environnemental plus faible, car elles ne nécessitent pas de développement séparé pour chaque plateforme et évitent une utilisation excessive des ressources matérielles.
- **Les applications natives**, bien qu'optimisées pour leurs plateformes respectives, demandent souvent plus de ressources côté serveur et côté utilisateur (téléchargement, mises à jour, stockage), augmentant ainsi leur empreinte écologique.

#### Temps de développement

- **Les PWA** sont plus rapides à développer, car elles permettent un code unique fonctionnant sur plusieurs plateformes, réduisant ainsi les coûts et la complexité du développement.
- **Les applications natives**, en revanche, demandent un développement spécifique pour chaque système d’exploitation (iOS, Android), ce qui rallonge considérablement le temps de production.

#### Maintenance

- **Les PWA** sont plus faciles à maintenir puisqu’elles ne nécessitent pas de mises à jour via les stores et s’actualisent automatiquement comme un site web.
- **Les applications natives** demandent des mises à jour régulières sur chaque plateforme, nécessitant souvent une validation par les stores avant d’être déployées.

_Sources :_
_[PWA vs Native Apps](https://web.dev/progressive-web-apps/)_
_[PWA vs Native App 2025 Comparison Table](https://progressier.com/pwa-vs-native-app-comparison-table)_
