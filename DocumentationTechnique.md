# Documentation Technique

## 1. Introduction

Ce document présente l'architecture technique et les choix technologiques du projet. L'application vise à proposer des itinéraires personnalisés en fonction des préférences des utilisateurs, en exploitant des données cartographiques et des événements de calendrier.

## 2. Choix des technologies

### 2.1. Front-end : Next.js + Tailwind CSS

#### Performances
- **Next.js** permet un rendu hybride (SSR et SSG), ce qui améliore la performance et le SEO.
- **Angular** est performant mais plus lourd pour un projet de cette envergure.
- **React** seul nécessite une configuration supplémentaire pour le SSR.

*Source : [Next.js Performance](https://nextjs.org/docs/basic-features/pages)*

#### Éco-responsabilité
- Next.js optimise le chargement et réduit l’empreinte carbone.
- Angular est plus gourmand en ressources.

*Source : [Web Sustainability](https://sustainablewebdesign.org/)*

| Technologie | Performances | SEO | Éco-responsabilité | Facilité d'apprentissage |
|------------|------------|-----|-------------------|--------------------|
| Next.js    | ⭐⭐⭐⭐      | ⭐⭐⭐⭐| ⭐⭐⭐              | ⭐⭐⭐               |
| Angular    | ⭐⭐⭐       | ⭐⭐⭐ | ⭐⭐               | ⭐⭐                |
| React      | ⭐⭐⭐       | ⭐⭐⭐ | ⭐⭐⭐              | ⭐⭐⭐⭐              |

### 2.2. Back-end : Node.js + Express

#### Performances
- **Node.js** est rapide pour les requêtes asynchrones.
- **Django** est puissant mais plus lent pour des API en temps réel.

*Source : [Node.js Performance](https://nodejs.org/en/docs/guides/performance/)*

| Technologie  | Performance | Scalabilité | Éco-responsabilité | Communauté |
|-------------|------------|------------|-------------------|------------|
| Node.js + Express | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Django      | ⭐⭐⭐   | ⭐⭐⭐  | ⭐⭐  | ⭐⭐⭐  |
| NestJS      | ⭐⭐⭐⭐  | ⭐⭐⭐⭐ | ⭐⭐⭐  | ⭐⭐⭐  |

### 2.3. Cartographie : GraphHopper + API Overpass vs Google Maps

#### Justification
- **GraphHopper** est plus économe en ressources que Google Maps.
- **API Overpass** permet une récupération fine des données OpenStreetMap.
- **Google Maps API** est payant et plus énergivore.

*Source : [GraphHopper vs Google Maps](https://www.graphhopper.com/)*

| API | Open Source | Prix | Performances | Éco-responsabilité |
|-----|------------|------|-------------|-------------------|
| GraphHopper | ✅ | Gratuit | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| API Overpass | ✅ | Gratuit | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Google Maps API | ❌ | Payant | ⭐⭐⭐⭐⭐ | ⭐ |

## 3. Justification PWA vs application native

| Critère             | PWA   | Application Native |
|--------------------|------|----------------|
| Performance       | ⭐⭐⭐ | ⭐⭐⭐⭐          |
| Éco-responsabilité | ⭐⭐⭐⭐ | ⭐⭐            |
| Temps de dev      | ⭐⭐⭐⭐ | ⭐⭐            |
| Maintenance       | ⭐⭐⭐⭐ | ⭐⭐            |

*Source : [PWA vs Native Apps](https://web.dev/progressive-web-apps/)*

## 4. Gestion des notifications push avec Firebase

### 4.1. Justification du choix de Firebase

| Technologie       | Facilité d'intégration | Coût | Éco-responsabilité | Fonctionnalités |
|------------------|----------------------|------|-------------------|---------------|
| Firebase        | ⭐⭐⭐⭐                  | Gratuit | ⭐⭐⭐⭐             | ⭐⭐⭐⭐         |
| OneSignal       | ⭐⭐⭐                    | Gratuit | ⭐⭐               | ⭐⭐⭐          |
| AWS SNS         | ⭐                      | Payant  | ⭐⭐⭐              | ⭐⭐⭐          |

*Source : [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging)*

## 5. Conclusion

Le choix des technologies a été réalisé en tenant compte de la performance, de l’éco-responsabilité et du coût. L'architecture choisie garantit une bonne évolutivité et une optimisation des ressources.

